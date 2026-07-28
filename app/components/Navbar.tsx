import Link from "next/link";

export default function Navbar() {
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
          gap: "30px",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "#000",
            fontWeight: "500",
          }}
        >
          Home
        </Link>

        <Link
          href="/products"
          style={{
            textDecoration: "none",
            color: "#000",
            fontWeight: "500",
          }}
        >
          Products
        </Link>

        <Link
          href="/reviews"
          style={{
            textDecoration: "none",
            color: "#000",
            fontWeight: "500",
          }}
        >
          Reviews
        </Link>

        <Link
          href="/artisans"
          style={{
            textDecoration: "none",
            color: "#000",
            fontWeight: "500",
          }}
        >
          Artisans
        </Link>

        <Link
          href="/about"
          style={{
            textDecoration: "none",
            color: "#000",
            fontWeight: "500",
          }}
        >
          About
        </Link>

        <Link
          href="/contact"
          style={{
            textDecoration: "none",
            color: "#000",
            fontWeight: "500",
          }}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}