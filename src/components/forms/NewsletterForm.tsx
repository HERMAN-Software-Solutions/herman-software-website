"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "✅ You're subscribed! Check your inbox.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-lg bg-teal/10 border border-teal/20 p-4 text-center">
        <p className="text-body-sm font-medium text-teal">{message}</p>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 rounded-md border border-gray-light bg-surface px-4 py-2.5 text-body-sm text-foreground placeholder:text-gray-medium focus:border-teal focus:outline-none dark:bg-navy-dark dark:border-navy-light dark:text-white"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-md bg-teal px-4 py-2.5 text-body-sm font-medium text-white hover:bg-teal-dark transition-colors disabled:opacity-50"
        >
          {status === "loading" ? "Sending..." : "Subscribe"}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-2 text-xs text-red-500">{message}</p>
      )}
    </div>
  );
}