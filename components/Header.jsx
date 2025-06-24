"use client"
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Explore Artists", href: "/pages/artists" },
    { label: "Add Artists", href: "/pages/addArtist" },
    { label: "Admin Dashboard", href: "/pages/dashboard" },
  ];

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          <span className="text-purple-600 text-2xl font-bold tracking-tight">🎨 Artistly</span>
        </div>

        <nav className="flex flex-wrap gap-2 justify-center sm:justify-end">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                pathname === link.href
                  ? "bg-purple-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
