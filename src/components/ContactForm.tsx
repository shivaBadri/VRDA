"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

type Field = "name" | "email" | "phone" | "subject" | "message";
type FormData = Record<Field, string>;
type Status = "idle" | "submitting" | "success" | "error";

const initial: FormData = { name: "", email: "", phone: "", subject: "", message: "" };

function validate(data: FormData): Partial<Record<Field, string>> {
  const errors: Partial<Record<Field, string>> = {};
  if (!data.name.trim()) errors.name = "Please enter your name.";
  if (!data.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (data.phone && !/^[+\d][\d\s()-]{6,}$/.test(data.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!data.message.trim()) errors.message = "Please enter a message.";
  return errors;
}

export default function ContactForm() {
  const [data, setData] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const update = (field: Field, value: string) => {
    setData((d) => ({ ...d, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setData(initial);
    } catch {
      setStatus("error");
    }
  };

  const fieldClass = (field: Field) =>
    `w-full rounded-md border bg-white px-4 py-3 text-sm text-ink placeholder:text-steel/70 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500/40 ${
      errors[field] ? "border-red-400" : "border-line focus:border-gold-500"
    }`;

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-line bg-white p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-green-600" aria-hidden="true" />
        <h3 className="mt-4 font-display text-xl font-bold text-navy-900">Message sent</h3>
        <p className="mt-2 max-w-sm text-sm text-steel">
          Thanks for reaching out. Our team will get back to you as soon as possible.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn btn-navy mt-6"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-xl border border-line bg-white p-6 sm:p-8">
      <h3 className="font-display text-xl font-bold text-navy-900">Send us a message</h3>
      <p className="mt-1 text-sm text-steel">We usually respond within one business day.</p>

      <div className="mt-6 space-y-4">
        <Field label="Your Name" error={errors.name} htmlFor="name">
          <input
            id="name"
            type="text"
            value={data.name}
            onChange={(e) => update("name", e.target.value)}
            className={fieldClass("name")}
            placeholder="John Doe"
            autoComplete="name"
          />
        </Field>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Your Email" error={errors.email} htmlFor="email">
            <input
              id="email"
              type="email"
              value={data.email}
              onChange={(e) => update("email", e.target.value)}
              className={fieldClass("email")}
              placeholder="you@company.com"
              autoComplete="email"
            />
          </Field>
          <Field label="Phone Number" error={errors.phone} htmlFor="phone" optional>
            <input
              id="phone"
              type="tel"
              value={data.phone}
              onChange={(e) => update("phone", e.target.value)}
              className={fieldClass("phone")}
              placeholder="+91 00000 00000"
              autoComplete="tel"
            />
          </Field>
        </div>

        <Field label="Subject" error={undefined} htmlFor="subject" optional>
          <input
            id="subject"
            type="text"
            value={data.subject}
            onChange={(e) => update("subject", e.target.value)}
            className={fieldClass("subject")}
            placeholder="How can we help?"
          />
        </Field>

        <Field label="Your Message" error={errors.message} htmlFor="message">
          <textarea
            id="message"
            rows={5}
            value={data.message}
            onChange={(e) => update("message", e.target.value)}
            className={`${fieldClass("message")} resize-y`}
            placeholder="Tell us about your requirement..."
          />
        </Field>
      </div>

      {status === "error" ? (
        <div className="mt-4 flex items-start gap-2 rounded-md bg-red-50 p-3 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Something went wrong sending your message. Please try again, or email us directly.</span>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn btn-gold mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  optional = false,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 flex items-center gap-1 text-sm font-medium text-navy-900">
        {label}
        {optional ? <span className="text-xs font-normal text-steel">(optional)</span> : null}
      </label>
      {children}
      {error ? <p className="mt-1 text-xs text-red-600">{error}</p> : null}
    </div>
  );
}
