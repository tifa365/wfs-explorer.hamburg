"use client";

import { useEffect } from "react";

export function SuppressHydrationWarnings() {
  useEffect(() => {
    // Suppress hydration warnings in development caused by browser extensions
    if (process.env.NODE_ENV === 'development') {
      const originalError = console.error;
      console.error = (...args) => {
        if (typeof args[0] === 'string' && args[0].includes('hydration')) {
          return; // Suppress hydration warnings
        }
        originalError.apply(console, args);
      };

      return () => {
        console.error = originalError; // Restore original console.error
      };
    }
  }, []);

  return null;
}