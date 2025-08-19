import { useState } from "react";

export default function Hero() {
  const [title, setTitle] = useState("Welcome to WebSemantix");

  return (
    <section id="hero" className="bg-white shadow-md p-6 rounded-lg text-center">
        <h1 className="text-3xl font-bold text-brand-dark">{title}</h1>
      <p className="mt-2 text-gray-700">
        Explore tutorials, articles, and <mark>resources</mark>.
      </p>
      <progress value={70} max={100} className="mt-4 w-full"></progress>
      <button
        onClick={() => setTitle("🚀 Title Changed!")}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Change Title
      </button>
    </section>
  );
}
