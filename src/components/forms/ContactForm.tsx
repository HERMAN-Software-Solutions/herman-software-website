"use client";

import { useState } from "react";
import { FormInput } from "@/components/forms/FormInput";
import { FormTextarea } from "@/components/forms/FormTextarea";
import { FormSelect } from "@/components/forms/FormSelect";
import { Button } from "@/components/shared/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        const json = await res.json();
        setError(json.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-card border border-teal/30 bg-teal/5 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="mb-2">Message Sent!</h3>
        <p className="text-foreground">
          Thank you for reaching out. We typically respond within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="rounded-md bg-error/10 border border-error/30 p-4 text-body-sm text-error">
          {error}
        </div>
      )}
      <FormInput label="Full Name" name="name" placeholder="Your full name" required />
      <FormInput label="Email Address" name="email" type="email" placeholder="you@example.com" required />
      <FormInput label="Phone Number" name="phone" type="tel" placeholder="+256 XXX XXXXXX" />
      <FormInput label="Company / Organization" name="company" placeholder="Your company name" />
      <FormSelect
        label="Service Interest"
        name="service"
        options={[
          { value: "custom-software", label: "Custom Software Engineering" },
          { value: "web-applications", label: "Web & Cloud Applications" },
          { value: "mobile-development", label: "Mobile Development" },
          { value: "it-consulting", label: "IT Strategy & Consulting" },
          { value: "enterprise-systems", label: "Enterprise Systems" },
          { value: "other", label: "Other / Not Sure" },
        ]}
      />
      <FormTextarea
        label="Message / Project Description"
        name="message"
        placeholder="Tell us about your project, goals, and any questions you have..."
        required
      />
      <Button type="submit" variant="primary" className="w-full">
        {loading ? "Sending..." : "Send Message"}
      </Button>
      <p className="text-body-sm text-gray-medium text-center">
        We typically respond within 24 hours. All information is kept confidential.
      </p>
    </form>
  );
}