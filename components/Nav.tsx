const links = [
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-base/70 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6" aria-label="Primary">
        <a href="#home" className="font-display font-medium text-white">&lt; Sachin Mulge /&gt;</a>
        <ul className="flex max-w-[65vw] gap-3 overflow-x-auto text-xs text-muted sm:gap-5 sm:text-sm">
          {links.map(([label, href]) => (
            <li key={href} className="shrink-0"><a href={href} className="transition hover:text-white">{label}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
