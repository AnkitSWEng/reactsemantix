import { useEffect, useState } from "react";

export default function Sidebar() {
  const [visitors, setVisitors] = useState<number | null>(null);

  useEffect(() => {
    // fake visitor counter for demo
    setVisitors(1234);
  }, []);

  return (
    <aside className="my-8 p-4 border rounded bg-gray-50">
      <h3 className="text-lg font-semibold">Quick Links</h3>
      <ul className="list-disc ml-6">
        <li><a href="#tips">HTML Tips</a></li>
        <li><a href="#tools">CSS Tools</a></li>
      </ul>
      <p className="mt-2">👋 You are visitor number: <span>{visitors ?? "Loading..."}</span></p>
    </aside>
  );
}
