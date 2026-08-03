import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #2563EB, #1E40AF)",
          color: "white",
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "56px",
            marginBottom: "20px",
          }}
        >
          Welcome to Handcrafted Haven
        </h1>

        <p
          style={{
            maxWidth: "750px",
            margin: "0 auto",
            fontSize: "20px",
            lineHeight: "1.8",
          }}
        >
          Discover authentic handmade African crafts created by talented
          artisans. Every purchase supports local craftsmanship and preserves
          traditional skills.
        </p>

        <Link href="/products">
          <button
            style={{
              marginTop: "35px",
              padding: "15px 35px",
              backgroundColor: "white",
              color: "#2563EB",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            Shop Now
          </button>
        </Link>
      </section>

      {/* Features */}
      <section
        style={{
          padding: "70px 40px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#2563EB",
            fontSize: "40px",
            marginBottom: "50px",
          }}
        >
          Why Shop With Us?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
            gap: "30px",
          }}
        >
          {[
            {
              title: "Authentic Handmade Products",
              text: "Every item is handmade by skilled African artisans.",
            },
            {
              title: "Support Local Communities",
              text: "Every purchase helps artisans grow their businesses.",
            },
            {
              title: "Secure Shopping",
              text: "Enjoy a safe and trusted shopping experience.",
            },
            {
              title: "Fast Delivery",
              text: "Reliable delivery to customers around the world.",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                padding: "30px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  color: "#2563EB",
                  marginBottom: "15px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#555",
                  lineHeight: "1.7",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section
        style={{
          backgroundColor: "#2563EB",
          color: "white",
          textAlign: "center",
          padding: "70px 20px",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            marginBottom: "20px",
          }}
        >
          Ready to Discover Unique Handmade Crafts?
        </h2>

        <p
          style={{
            fontSize: "18px",
            marginBottom: "30px",
          }}
        >
          Browse our growing collection of authentic African handmade products.
        </p>

        <Link href="/products">
          <button
            style={{
              padding: "15px 35px",
              backgroundColor: "white",
              color: "#2563EB",
              border: "none",
              borderRadius: "8px",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Explore Products
          </button>
        </Link>
      </section>
    </main>
  );
}