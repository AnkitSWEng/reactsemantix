export default function Header() {
  return (
    <header className="bg-[#3399f3] text-white p-4 flex justify-between items-center">
      <div className="logo font-bold text-xl">WebSemantix</div>
      <nav aria-label="Main Navigation">
        <ul className="flex gap-4 list-none">
          <li><a href="#home" className="hover:text-[#FE8C00] font-bold">Home</a></li>
          <li><a href="#articles" className="hover:text-[#FE8C00] font-bold">Articles</a></li>
          <li><a href="#media" className="hover:text-[#FE8C00] font-bold">Media</a></li>
          <li><a href="#contact" className="hover:text-[#FE8C00] font-bold">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
