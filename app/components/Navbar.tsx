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
      }}
    >
      <h2
        style={{
          color: "#2563EB",
          margin: 0,
          fontSize: "28px",
          fontWeight: "bold",
        }}
      >
        Handcrafted Haven
      </h2>

      <div
        style={{
          display: "flex",
          gap: "30px",
        }}
      >
        <a
          href="/"
          style={{ textDecoration: "none", color: "#000", fontWeight: "500" }}
        >
          Home
        </a>

        <a
          href="#products"
          style={{ textDecoration: "none", color: "#000", fontWeight: "500" }}
        >
          Products
        </a>

        <a
          href="#artisans"
          style={{ textDecoration: "none", color: "#000", fontWeight: "500" }}
        >
          Artisans
        </a>

        <a
          href="#about"
          style={{ textDecoration: "none", color: "#000", fontWeight: "500" }}
        >
          About
        </a>

        <a
          href="#contact"
          style={{ textDecoration: "none", color: "#000", fontWeight: "500" }}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}