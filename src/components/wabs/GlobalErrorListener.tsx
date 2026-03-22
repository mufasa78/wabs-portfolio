"use client";

import { useEffect } from "react";

/**
 * GlobalErrorListener handles ChunkLoadErrors by triggering a page reload.
 * This is common in Next.js when a new deployment happens and the client 
 * tries to load a JS chunk hash that no longer exists on the server.
 * 
 * NOTE: Added reload prevention to avoid infinite loops.
 */
export default function GlobalErrorListener() {
  useEffect(() => {
    // Prevent infinite reload loops by tracking reload attempts
    const reloadKey = "wabs_reload_timestamp";
    const now = Date.now();
    const lastReload = localStorage.getItem(reloadKey);
    
    // If we've reloaded in the last 5 seconds, don't reload again
    if (lastReload && now - parseInt(lastReload) < 5000) {
      console.warn("Reload loop detected. Skipping error handler reload.");
      return;
    }

    // 1. Intercept console.error
    const originalConsoleError = window.console.error;
    window.console.error = (...args) => {
      const error = args[0];
      if (
        (error instanceof Error && (error.name === "ChunkLoadError" || error.message?.includes("ChunkLoadError"))) ||
        (typeof error === "string" && error.includes("ChunkLoadError"))
      ) {
        console.warn("ChunkLoadError caught via console. Reloading...");
        localStorage.setItem(reloadKey, Date.now().toString());
        window.location.reload();
        return;
      }
      originalConsoleError.apply(window.console, args);
    };

    // 2. Listen for unhandled promise rejections (often how ChunkLoadErrors manifest)
    const handleRejection = (event: PromiseRejectionEvent) => {
      if (event.reason && (event.reason.name === "ChunkLoadError" || event.reason.message?.includes("ChunkLoadError"))) {
        console.warn("ChunkLoadError caught via rejection. Reloading...");
        localStorage.setItem(reloadKey, Date.now().toString());
        window.location.reload();
      }
    };

    // 3. Listen for script loading errors in the capture phase
    const handleCaptureError = (event: ErrorEvent) => {
      const target = event.target as HTMLElement;
      if (target && target.tagName === "SCRIPT" && (target as HTMLScriptElement).src.includes("/_next/")) {
        console.warn("Static script failed to load. Reloading...");
        localStorage.setItem(reloadKey, Date.now().toString());
        window.location.reload();
      }
    };

    window.addEventListener("unhandledrejection", handleRejection);
    window.addEventListener("error", handleCaptureError, true); // Capture phase is key for scripts

    return () => {
      window.console.error = originalConsoleError;
      window.removeEventListener("unhandledrejection", handleRejection);
      window.removeEventListener("error", handleCaptureError, true);
    };
  }, []);

  return null;
}
