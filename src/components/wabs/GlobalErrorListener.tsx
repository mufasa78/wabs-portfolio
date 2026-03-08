"use client";

import { useEffect } from "react";

/**
 * GlobalErrorListener handles ChunkLoadErrors by triggering a page reload.
 * This is common in Next.js when a new deployment happens and the client 
 * tries to load a JS chunk hash that no longer exists on the server.
 */
export default function GlobalErrorListener() {
  useEffect(() => {
    // 1. Intercept console.error as Next.js logs ChunkLoadErrors there
    const originalConsoleError = window.console.error;

    window.console.error = (...args) => {
      const error = args[0];
      
      if (
        (error instanceof Error && error.name === "ChunkLoadError") ||
        (typeof error === "string" && error.includes("ChunkLoadError"))
      ) {
        console.warn("ChunkLoadError detected. Reloading page to fetch latest deployment...");
        window.location.reload();
        return;
      }

      originalConsoleError.apply(window.console, args);
    };

    // 2. Also listen for unhandled resource loading errors
    const handleGlobalError = (event: ErrorEvent) => {
      if (event.message && event.message.includes("ChunkLoadError")) {
        console.warn("Global ChunkLoadError detected. Reloading...");
        window.location.reload();
      }
    };

    window.addEventListener("error", handleGlobalError);

    return () => {
      window.console.error = originalConsoleError;
      window.removeEventListener("error", handleGlobalError);
    };
  }, []);

  return null;
}
