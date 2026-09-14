"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <h2 className="mb-4 text-2xl font-bold text-heading">Something went wrong</h2>
        <p className="mb-6 text-foreground">An unexpected error occurred. Please try again.</p>
        <button
          onClick={reset}
          className="rounded-md bg-teal px-6 py-2 text-white hover:bg-teal-dark transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}