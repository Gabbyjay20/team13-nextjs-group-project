const artisans = [
  {
    id: 1,
    name: "Sarah Johnson",
    craft: "Wooden Handmade Items",
    story:
      "Sarah creates unique wooden crafts using sustainable materials and traditional techniques.",
  },
  {
    id: 2,
    name: "Grace Williams",
    craft: "African Bead Designs",
    story:
      "Grace creates beautiful handmade jewelry inspired by cultural designs.",
  },
  {
    id: 3,
    name: "Michael Brown",
    craft: "Handwoven Baskets",
    story:
      "Michael specializes in handcrafted baskets made with care and attention to detail.",
  },
];

export default function ArtisansPage() {
  return (
    <main style={{ padding: "50px 60px" }}>
      <h1
        style={{
          fontSize: "36px",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        Our Artisans
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
        }}
      >
        {artisans.map((artisan) => (
          <div
            key={artisan.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "25px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              {artisan.name}
            </h2>

            <p style={{ marginTop: "10px" }}>
              <strong>Craft:</strong> {artisan.craft}
            </p>

            <p style={{ marginTop: "10px" }}>
              {artisan.story}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}