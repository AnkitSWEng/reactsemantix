import { useState } from "react";

export default function DynamicList() {
  const [items, setItems] = useState(["HTML Basics", "CSS Styling"]);
  const [newItem, setNewItem] = useState("");

  return (
    <section id="dynamicList" className="my-8">
      <h2 className="text-2xl font-semibold">Dynamic List</h2>
      <ul className="list-disc ml-6">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add new item"
        className="border p-2 mt-2 w-full"
      />

      <div className="mt-2 flex gap-2">
        <button
          onClick={() => {
            if (newItem) {
              setItems([...items, newItem]);
              setNewItem("");
            }
          }}
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          Add Item
        </button>
        <button
          onClick={() => setItems(items.slice(0, -1))}
          className="px-3 py-1 bg-yellow-500 text-white rounded"
        >
          Remove Last
        </button>
        <button
          onClick={() => setItems([])}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          Clear All
        </button>
      </div>
    </section>
  );
}
