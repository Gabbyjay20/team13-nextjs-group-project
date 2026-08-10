import Link from "next/link";

const artisans = [
  {
    id: 1,
    name: "Amina Okeke",
    craft: "Wood Carving Artisan",
    image: "/images/artisans/amina-okeke.jpg",
    story:
      "Amina creates beautiful wooden crafts inspired by African traditions and heritage.",
  },
  {
    id: 2,
    name: "Kwame Mensah",
    craft: "Basket Weaving Artisan",
    image: "/images/artisans/kwame-mensah.jpg",
    story:
      "Kwame creates handmade woven baskets using traditional techniques passed down through generations.",
  },
  {
    id: 3,
    name: "Zuri Ndlovu",
    craft: "Bead Jewelry Designer",
    image: "/images/artisans/zuri-ndlovu.jpg",
    story:
      "Zuri designs unique bead jewelry that celebrates African culture and creativity.",
  },
];

export default function ArtisansPage() {
  return (
    <main
      style={{
        padding: "50px 20px",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* PAGE HEADER */}

        <h1
          style={{
            textAlign: "center",
            fontSize: "clamp(32px, 6vw, 46px)",
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
          Discover the talented artisans behind every handcrafted
          product. Their passion, creativity, and dedication
          preserve traditional African craftsmanship while
          producing beautiful handmade goods.
        </p>

        {/* ARTISAN GRID */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {artisans.map((artisan) => (
            <article
              key={artisan.id}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "14px",
                overflow: "hidden",
                boxShadow:
                  "0 4px 15px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* ARTISAN IMAGE */}

              <img
                src={artisan.image}
                alt={`${artisan.name} - ${artisan.craft}`}
                style={{
                  width: "100%",
                  height: "320px",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* ARTISAN INFORMATION */}

              <div
                style={{
                  padding: "25px",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <h2
                  style={{
                    marginBottom: "8px",
                    color: "#222",
                    fontSize: "25px",
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
                  {artisan.story}
                </p>

                {/* VIEW PROFILE */}

                <Link
                  href={`/artisans/${artisan.id}`}
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "13px 0",
                    backgroundColor: "#2563EB",
                    color: "white",
                    textDecoration: "none",
                    textAlign: "center",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    boxSizing: "border-box",
                    marginTop: "auto",
                  }}
                >
                  View Artisan Profile
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}