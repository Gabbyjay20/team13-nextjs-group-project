import Link from "next/link";
import { products } from "../../data/products";

const artisans = [
  {
    id: 1,
    name: "Amina Okeke",
    craft: "Wood Carving Artisan",
    image: "/images/artisans/amina-okeke.jpg",
    story:
      "Amina creates beautiful wooden crafts inspired by African traditions and heritage. Her work combines traditional African craftsmanship with practical designs for modern homes.",
    location: "Lagos, Nigeria",
    experience: "9 Years",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Kwame Mensah",
    craft: "Basket Weaving Artisan",
    image: "/images/artisans/kwame-mensah.jpg",
    story:
      "Kwame creates handmade woven baskets using traditional techniques passed down through generations. His work celebrates Ghanaian craftsmanship and the beauty of natural materials.",
    location: "Kumasi, Ghana",
    experience: "11 Years",
    rating: 5.0,
  },
  {
    id: 3,
    name: "Zuri Ndlovu",
    craft: "Bead Jewelry Designer",
    image: "/images/artisans/zuri-ndlovu.jpg",
    story:
      "Zuri designs unique bead jewelry that celebrates African culture and creativity. Her collections combine traditional patterns with modern fashion.",
    location: "Bulawayo, Zimbabwe",
    experience: "7 Years",
    rating: 4.8,
  },
];

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ArtisanProfile({
  params,
}: PageProps) {
  const { id } = await params;

  const artisan = artisans.find(
    (item) => item.id === Number(id)
  );

  if (!artisan) {
    return (
      <main
        style={{
          padding: "80px 20px",
          textAlign: "center",
          minHeight: "60vh",
        }}
      >
        <h1>Artisan Not Found</h1>

        <Link
          href="/artisans"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "12px 25px",
            backgroundColor: "#2563EB",
            color: "white",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          Back to Artisans
        </Link>
      </main>
    );
  }

  const artisanProducts = products.filter(
    (product) => product.artisanId === artisan.id
  );

  return (
    <main
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      {/* PROFILE HERO */}

      <section
        style={{
          padding: "60px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "40px",
            alignItems: "center",
          }}
        >
          {/* IMAGE */}

          <div>
            <img
              src={artisan.image}
              alt={`${artisan.name} - ${artisan.craft}`}
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                borderRadius: "20px",
                display: "block",
              }}
            />
          </div>

          {/* INFORMATION */}

          <div>
            <p
              style={{
                color: "#2563EB",
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Meet the Artisan
            </p>

            <h1
              style={{
                fontSize: "clamp(36px, 6vw, 60px)",
                color: "#1E3A8A",
                margin: "0 0 15px",
              }}
            >
              {artisan.name}
            </h1>

            <h2
              style={{
                fontSize: "24px",
                marginBottom: "25px",
              }}
            >
              {artisan.craft}
            </h2>

            <p
              style={{
                color: "#555",
                fontSize: "17px",
                lineHeight: "1.8",
              }}
            >
              {artisan.story}
            </p>

            {/* ARTISAN DETAILS */}

            <div
              style={{
                marginTop: "25px",
                lineHeight: "1.8",
              }}
            >
              <p>
                <strong>📍 Location:</strong>{" "}
                {artisan.location}
              </p>

              <p>
                <strong>🏆 Experience:</strong>{" "}
                {artisan.experience}
              </p>

              <p>
                <strong>⭐ Rating:</strong>{" "}
                {artisan.rating} / 5
              </p>

              <p>
                <strong>🛍️ Products:</strong>{" "}
                {artisanProducts.length}
              </p>
            </div>

            {/* BUTTONS */}

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                marginTop: "25px",
              }}
            >
              <a
                href={`mailto:support@handcraftedhaven.com?subject=Contact ${artisan.name}`}
                style={{
                  padding: "14px 25px",
                  backgroundColor: "#2563EB",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "8px",
                  fontWeight: "bold",
                }}
              >
                Contact Artisan
              </a>

              <Link
                href="/artisans"
                style={{
                  padding: "14px 25px",
                  backgroundColor: "#E5E7EB",
                  color: "#111827",
                  textDecoration: "none",
                  borderRadius: "8px",
                  fontWeight: "bold",
                }}
              >
                ← Back to Artisans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ARTISAN STORY */}

      <section
        style={{
          padding: "70px 20px",
          backgroundColor: "white",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              color: "#2563EB",
              fontSize: "clamp(30px, 5vw, 40px)",
              marginBottom: "25px",
            }}
          >
            About {artisan.name}
          </h2>

          <p
            style={{
              color: "#555",
              fontSize: "18px",
              lineHeight: "1.8",
            }}
          >
            {artisan.story}
          </p>
        </div>
      </section>

      {/* ARTISAN PRODUCTS */}

      <section
        style={{
          padding: "70px 20px",
          backgroundColor: "#f8f9fa",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#2563EB",
              fontSize: "clamp(30px, 5vw, 40px)",
              marginBottom: "10px",
            }}
          >
            {artisan.name}'s Products
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#666",
              marginBottom: "40px",
            }}
          >
            Explore handmade products created by{" "}
            {artisan.name}.
          </p>

          {artisanProducts.length === 0 ? (
            <p
              style={{
                textAlign: "center",
                color: "#666",
              }}
            >
              No products available yet.
            </p>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "30px",
              }}
            >
              {artisanProducts.map((product) => (
                <div
                  key={product.id}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow:
                      "0 4px 15px rgba(0,0,0,0.1)",
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: "260px",
                      objectFit: "cover",
                    }}
                  />

                  <div
                    style={{
                      padding: "20px",
                    }}
                  >
                    <h3
                      style={{
                        marginBottom: "10px",
                      }}
                    >
                      {product.name}
                    </h3>

                    <p
                      style={{
                        color: "#555",
                        lineHeight: "1.6",
                      }}
                    >
                      {product.description}
                    </p>

                    <p
                      style={{
                        color: "#F59E0B",
                        fontWeight: "bold",
                      }}
                    >
                      ⭐ {product.rating} / 5
                    </p>

                    <h3
                      style={{
                        color: "#2563EB",
                        fontSize: "22px",
                      }}
                    >
                      {product.price}
                    </h3>

                    <Link
                      href={`/products/${product.id}`}
                      style={{
                        display: "block",
                        textAlign: "center",
                        marginTop: "15px",
                        padding: "12px",
                        backgroundColor: "#2563EB",
                        color: "white",
                        textDecoration: "none",
                        borderRadius: "8px",
                        fontWeight: "bold",
                      }}
                    >
                      View Product
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}