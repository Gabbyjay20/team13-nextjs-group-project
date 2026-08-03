export default function ArtisansPage() {
  const artisans = [
    {
      id: 1,
      name: "Amina Okeke",
      craft: "Wooden Handmade Items",
      image: "/images/artisans/amina-okeke.jpg",
      experience: "9 Years",
      location: "Lagos, Nigeria",
      bio: "Amina is a skilled woodworker who creates handcrafted wooden bowls, trays, utensils, and home décor using traditional techniques passed down through generations.",
      products: 28,
      rating: 4.9,
    },
    {
      id: 2,
      name: "Zuri Ndlovu",
      craft: "African Beaded Jewelry",
      image: "/images/artisans/zuri-ndlovu.jpg",
      experience: "7 Years",
      location: "Bulawayo, Zimbabwe",
      bio: "Zuri designs beautiful handmade necklaces, bracelets, earrings, and accessories inspired by African culture and modern fashion.",
      products: 35,
      rating: 4.8,
    },
    {
      id: 3,
      name: "Kwame Mensah",
      craft: "Handwoven Baskets",
      image: "/images/artisans/kwame-mensah.jpg",
      experience: "11 Years",
      location: "Kumasi, Ghana",
      bio: "Kwame specializes in weaving strong, elegant baskets using natural fibers while preserving traditional Ghanaian craftsmanship.",
      products: 42,
      rating: 5.0,
    },
  ];

  return (
    <main
      style={{
        padding: "60px",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "42px",
          color: "#2563EB",
          marginBottom: "15px",
        }}
      >
        Meet Our Artisans
      </h1>

      <p
        style={{
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto 50px",
          color: "#555",
          lineHeight: "1.8",
          fontSize: "18px",
        }}
      >
        Discover the talented artisans behind every handcrafted product. Their
        passion, creativity, and dedication preserve traditional African
        craftsmanship while producing beautiful handmade goods.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "30px",
        }}
      >
        {artisans.map((artisan) => (
          <div
            key={artisan.id}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={artisan.image}
              alt={artisan.name}
              style={{
                width: "100%",
                height: "320px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "25px" }}>
              <h2
                style={{
                  marginBottom: "8px",
                  color: "#222",
                }}
              >
                {artisan.name}
              </h2>

              <p
                style={{
                  color: "#2563EB",
                  fontWeight: "bold",
                  marginBottom: "15px",
                  fontSize: "17px",
                }}
              >
                {artisan.craft}
              </p>

              <p
                style={{
                  color: "#555",
                  lineHeight: "1.7",
                  marginBottom: "20px",
                }}
              >
                {artisan.bio}
              </p>

              <p style={{ marginBottom: "8px" }}>
                <strong>Location:</strong> {artisan.location}
              </p>

              <p style={{ marginBottom: "8px" }}>
                <strong>Experience:</strong> {artisan.experience}
              </p>

              <p style={{ marginBottom: "8px" }}>
                <strong>Products:</strong> {artisan.products}
              </p>

              <p
                style={{
                  color: "#F59E0B",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                ⭐ {artisan.rating} / 5
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
                View Artisan
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}