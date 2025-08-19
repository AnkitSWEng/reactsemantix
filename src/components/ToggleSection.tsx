import { useState } from "react";

export default function ToggleSection() {
  const [highlight, setHighlight] = useState(false);

  return (
    <section id="toggleSection" className="my-8">
      <h2 className="text-2xl font-semibold">Toggle Highlight</h2>
      <p className={highlight ? "bg-yellow-200 p-2" : "p-2"}>
        Click the button to highlight this text.
      </p>
      <button
        onClick={() => setHighlight(!highlight)}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle Highlight
      </button>
    </section>
  );
}
