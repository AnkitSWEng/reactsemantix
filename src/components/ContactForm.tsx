import { useState } from "react";
import type { ContactFormData } from "../types";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const raw = Object.fromEntries(formData.entries());
    const data: ContactFormData = {
      name: raw.name as string,
      email: raw.email as string,
      phone: raw.phone as string,
      country: raw.country as string,
      subscribe: raw.subscribe as string | undefined,
        };


    try {
      const res = await fetch("/api/formsubmit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to submit form");
      setSubmitted(true);
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError("An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="my-8">
      <h2 className="text-2xl font-semibold">Contact Us</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <fieldset className="border p-4">
            <legend>Personal Information</legend>

            <label className="block">
              Full Name:
              <input name="name" type="text" required className="border w-full p-2" />
            </label>

            <label className="block">
              Email:
              <input name="email" type="email" required className="border w-full p-2" />
            </label>

            <label className="block">
              Phone:
              <input
                name="phone"
                type="tel"
                placeholder="+91-9876543210"
                pattern="^(\+91[- ]?)?[0-9]{10}$"
                required
                className="border w-full p-2"
              />
            </label>

            <label className="block">
              Country:
              <input list="countries" name="country" placeholder="Start typing..." className="border w-full p-2" />
              <datalist id="countries">
                <option value="India" />
                <option value="United States" />
                <option value="United Kingdom" />
              </datalist>
            </label>

            <label className="block">
              <input type="checkbox" name="subscribe" /> Subscribe to newsletter
            </label>
          </fieldset>

          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            {loading ? "Submitting..." : "Send Message"}
          </button>
        </form>
      ) : (
        <p className="text-green-600">✅ Thank you! Your form was submitted.</p>
      )}

      {error && <p className="text-red-600">{error}</p>}
    </section>
  );
}
