const products = [
  {
    id: 1,
    name: "Handmade Wooden Bowl",
    image: "/images/wooden-bowl.jpg",
    category: "Home Decor",
    description:
      "A beautifully crafted wooden bowl made from sustainable materials.",
    price: "$35",
    artisan: "Sarah Johnson",
  },
  {
    id: 2,
    name: "African Beaded Necklace",
    image: "/images/necklace.jpg",
    category: "Jewelry",
    description:
      "A unique handmade necklace inspired by traditional African designs.",
    price: "$25",
    artisan: "Grace Williams",
  },
  {
    id: 3,
    name: "Handwoven Basket",
    image: "/images/basket.jpg",
    category: "Crafts",
    description:
      "A durable handcrafted basket created using traditional weaving methods.",
    price: "$45",
    artisan: "Michael Brown",
  },
];

export default function ProductsPage() {
  return (
    <main
      style={{
        padding: "50px 60px",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "40px",
          color: "#2563EB",
        }}
      >
        Handmade Products
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              transition: "0.3s",
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
              <h2
                style={{
                  marginBottom: "10px",
                  fontSize: "24px",
                  color: "#222",
                }}
              >
                {product.name}
              </h2>

              <p style={{ marginBottom: "8px" }}>
                <strong>Category:</strong> {product.category}
              </p>

              <p style={{ marginBottom: "12px", color: "#555" }}>
                {product.description}
              </p>

              <p style={{ marginBottom: "8px" }}>
                <strong>Artisan:</strong> {product.artisan}
              </p>

              <p
                style={{
                  color: "#2563EB",
                  fontSize: "22px",
                  fontWeight: "bold",
                  marginBottom: "15px",
                }}
              >
                {product.price}
              </p>

              <button
                style={{
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "#2563EB",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}