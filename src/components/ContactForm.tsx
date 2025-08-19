import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
              <input type="text" required className="border w-full p-2" />
            </label>

            <label className="block">
              Email:
              <input type="email" required className="border w-full p-2" />
            </label>

            <label className="block">
              Phone:
              <input
                type="tel"
                placeholder="+91-9876543210"
                pattern="^(\+91[- ]?)?[0-9]{10}$"
                required
                className="border w-full p-2"
              />
            </label>

            <label className="block">
              Country:
              <input list="countries" placeholder="Start typing..." className="border w-full p-2" />
              <datalist id="countries">
                <option value="India" />
                <option value="United States" />
                <option value="United Kingdom" />
              </datalist>
            </label>

            <label className="block">
              <input type="checkbox" /> Subscribe to newsletter
            </label>
          </fieldset>

          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
            Send Message
          </button>
        </form>
      ) : (
        <p className="text-green-600">✅ Thank you! Your form was submitted.</p>
      )}
    </section>
  );
}
