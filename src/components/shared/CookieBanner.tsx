"use client";

import { useState, useEffect } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
    // Notify listeners (GA init script picks this up)
    window.dispatchEvent(
      new CustomEvent("cookie-consent-changed", { detail: "accepted" })
    );
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
    // Notify listeners that consent was declined
    window.dispatchEvent(
      new CustomEvent("cookie-consent-changed", { detail: "declined" })
    );
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[99999] border-t border-gray-light bg-surface p-4 shadow-2xl dark:bg-navy-dark dark:border-navy-light">
      <div className="container-site flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-body-sm text-foreground dark:text-foreground max-w-2xl">
          We use cookies to analyze website traffic and improve your experience. By accepting, you agree to our{" "}
          <a href="/privacy-policy" className="text-teal hover:underline">Privacy Policy</a>.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="rounded-md border border-gray-medium px-4 py-2 text-body-sm text-foreground hover:bg-surface-alt dark:text-foreground dark:hover:bg-navy-dark transition-colors"
          >
            Decline
          </button>
          <button
            onClick={acceptAll}
            className="rounded-md bg-teal px-4 py-2 text-body-sm font-medium text-white hover:bg-teal-dark transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}