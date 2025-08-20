import { useEffect, useState } from "react";

export default function Sidebar() {
  const [visitors, setVisitors] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const res = await fetch("/api/visitorcounter"); // adjust if backend runs elsewhere
        if (!res.ok) throw new Error("Failed to fetch visitor count");

        const data = await res.json();
        setVisitors(data.count);
      } catch (err) {
        setError("⚠️ Could not load visitor count");
        console.error(err);
      }
    };

    fetchVisitors();
  }, []);

  return (
    <aside className="my-8 p-4 border rounded bg-gray-50">
      <h3 className="text-lg font-semibold">Quick Links</h3>
      <ul className="list-disc ml-6">
        <li><a href="#tips">HTML Tips</a></li>
        <li><a href="#tools">CSS Tools</a></li>
      </ul>
      <p className="mt-2">
        👋 You are visitor number:{" "}
        <span>
          {error ? error : visitors !== null ? visitors : "Loading..."}
        </span>
      </p>
    </aside>
  );
}
