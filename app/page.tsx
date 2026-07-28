import Link from "next/link";

const featuredProducts = [
  {
    id: 1,
    name: "Handmade Wooden Bowl",
    image: "/images/wooden-bowl.jpg",
    price: "$45",
  },
  {
    id: 2,
    name: "African Beaded Necklace",
    image: "/images/necklace.jpg",
    price: "$30",
  },
  {
    id: 3,
    name: "Handwoven Basket",
    image: "/images/basket.jpg",
    price: "$55",
  },
];

const artisans = [
  {
    name: "Sarah Johnson",
    craft: "Wood Crafts",
  },
  {
    name: "Grace Williams",
    craft: "Jewelry Design",
  },
  {
    name: "Michael Brown",
    craft: "Basket Weaving",
  },
];

export default function Home() {
  return (
    <main>

      {/* Hero */}
      <section
        style={{
          background: "#2563EB",
          color: "white",
          textAlign: "center",
          padding: "90px 20px",
        }}
      >
        <h1 style={{ fontSize: "3.5rem", marginBottom: "20px" }}>
          Welcome to Handcrafted Haven
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "auto",
            lineHeight: 1.8,
            fontSize: "20px",
          }}
        >
          Discover unique handmade products created by talented artisans.
          Every purchase supports creativity, craftsmanship, and local
          communities.
        </p>

        <Link href="/products">
          <button
            style={{
              marginTop: "35px",
              padding: "15px 35px",
              fontSize: "18px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Shop Now
          </button>
        </Link>
      </section>

      {/* Featured Products */}
      <section style={{ padding: "70px 60px" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            color: "#2563EB",
          }}
        >
          Featured Products
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "30px",
          }}
        >
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                background: "white",
                boxShadow: "0 5px 12px rgba(0,0,0,.1)",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "20px" }}>
                <h3>{product.name}</h3>
                <p
                  style={{
                    color: "#2563EB",
                    fontWeight: "bold",
                  }}
                >
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Artisans */}
      <section
        style={{
          background: "#F8FAFC",
          padding: "70px 60px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#2563EB",
            marginBottom: "40px",
          }}
        >
          Meet Our Artisans
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "30px",
          }}
        >
          {artisans.map((artisan) => (
            <div
              key={artisan.name}
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "10px",
                textAlign: "center",
                boxShadow: "0 5px 10px rgba(0,0,0,.08)",
              }}
            >
              <h3>{artisan.name}</h3>
              <p>{artisan.craft}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        style={{
          padding: "70px 40px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#2563EB",
          }}
        >
          Why Choose Handcrafted Haven?
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          <div>
            <h3>🎨 Handmade</h3>
            <p>Every item is crafted with care.</p>
          </div>

          <div>
            <h3>🌍 Community</h3>
            <p>Support local artisans worldwide.</p>
          </div>

          <div>
            <h3>⭐ Quality</h3>
            <p>Unique products you won't find elsewhere.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        style={{
          background: "#F8FAFC",
          padding: "70px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#2563EB",
          }}
        >
          What Our Customers Say
        </h2>

        <blockquote
          style={{
            maxWidth: "700px",
            margin: "40px auto",
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          "The quality exceeded my expectations. I love knowing my purchase
          supports talented artisans."
        </blockquote>

        <p style={{ textAlign: "center", fontWeight: "bold" }}>
          — Emily Carter
        </p>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "#2563EB",
          color: "white",
          padding: "70px",
          textAlign: "center",
        }}
      >
        <h2>Are You an Artisan?</h2>

        <p style={{ margin: "20px 0" }}>
          Join our marketplace and showcase your handmade creations to customers
          around the world.
        </p>

        <Link href="/contact">
          <button
            style={{
              padding: "15px 35px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Become a Seller
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#111827",
          color: "white",
          textAlign: "center",
          padding: "25px",
        }}
      >
        © 2026 Handcrafted Haven. All Rights Reserved.
      </footer>
    </main>
  );
}