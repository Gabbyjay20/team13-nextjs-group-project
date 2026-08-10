import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111827",
        color: "white",
        marginTop: "60px",
        padding: "50px 30px 20px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* BRAND */}
        <div>
          <h2 style={{ color: "#60A5FA" }}>
            Handcrafted Haven
          </h2>

          <p
            style={{
              color: "#D1D5DB",
              lineHeight: "1.7",
            }}
          >
            Connecting customers with talented African artisans
            and authentic handmade products.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3>Quick Links</h3>

          <p>
            <Link
              href="/"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
          </p>

          <p>
            <Link
              href="/products"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Products
            </Link>
          </p>

          <p>
            <Link
              href="/artisans"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Artisans
            </Link>
          </p>

          <p>
            <Link
              href="/about"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              About
            </Link>
          </p>

          <p>
            <Link
              href="/contact"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Contact
            </Link>
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h3>Contact</h3>

          <p>📍 Lagos, Nigeria</p>

          <p>
            📧{" "}
            <a
              href="mailto:support@handcraftedhaven.com"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              support@handcraftedhaven.com
            </a>
          </p>

          <p>📞 +234 800 123 4567</p>
        </div>

        {/* SOCIAL MEDIA */}
        <div>
          <h3>Follow Us</h3>

          <div
            style={{
              display: "flex",
              gap: "18px",
              marginTop: "20px",
            }}
          >
            {/* FACEBOOK */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              style={{
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                backgroundColor: "#1877F2",
              }}
            >
              <FaFacebookF size={20} />
            </a>

            {/* INSTAGRAM */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                backgroundColor: "#E1306C",
              }}
            >
              <FaInstagram size={22} />
            </a>

            {/* LINKEDIN */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                backgroundColor: "#0A66C2",
              }}
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <hr
        style={{
          margin: "30px 0",
          borderColor: "#374151",
        }}
      />

      {/* COPYRIGHT */}
      <p
        style={{
          textAlign: "center",
          color: "#9CA3AF",
        }}
      >
        © 2026 Handcrafted Haven. All Rights Reserved.
      </p>
    </footer>
  );
}