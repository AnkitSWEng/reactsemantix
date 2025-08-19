import { useState } from "react";

export default function AnimationSection() {
  const [animate, setAnimate] = useState(false);

  return (
    <section id="animationSection" className="my-8">
      <h2 className="text-2xl font-semibold">Animate Box</h2>
      <div
        className={`w-16 h-16 bg-red-400 transition-transform duration-500 ${
          animate ? "translate-x-32" : ""
        }`}
      />
      <button
        onClick={() => setAnimate(!animate)}
        className="mt-4 px-4 py-2 bg-purple-500 text-white rounded"
      >
        Animate
      </button>
    </section>
  );
}
