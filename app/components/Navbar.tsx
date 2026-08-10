"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Reviews", path: "/reviews" },
    { name: "Artisans", path: "/artisans" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "🛒 Cart", path: "/cart" },
  ];

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 60px",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          color: "#2563EB",
          textDecoration: "none",
          fontSize: "28px",
          fontWeight: "bold",
        }}
      >
        Handcrafted Haven
      </Link>


      {/* Navigation Links */}
      <div
        style={{
          display: "flex",
          gap: "25px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {links.map((link) => {
          const active = pathname === link.path;

          return (
            <Link
              key={link.path}
              href={link.path}
              style={{
                textDecoration: "none",
                color: active ? "#2563EB" : "#000",
                fontWeight: active ? "bold" : "500",
                borderBottom: active
                  ? "3px solid #2563EB"
                  : "3px solid transparent",
                paddingBottom: "5px",
                transition: "0.3s",
              }}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}