import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "40px",
          padding: "70px 20px",
          backgroundColor: "#f8f9fa",
          flexWrap: "wrap",
        }}
      >
        {/* HERO TEXT */}
        <div
          style={{
            flex: "1 1 400px",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(38px, 6vw, 56px)",
              color: "#1e3a8a",
              marginBottom: "25px",
              lineHeight: "1.15",
            }}
          >
            Welcome to
            <br />
            Handcrafted Haven
          </h1>

          <p
            style={{
              fontSize: "clamp(17px, 2vw, 20px)",
              color: "#555",
              lineHeight: "1.8",
              marginBottom: "35px",
            }}
          >
            Discover authentic handmade African crafts created by
            talented artisans. Every purchase supports local
            craftsmanship and preserves traditional skills.
          </p>

          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/products"
              style={{
                display: "inline-block",
                padding: "15px 30px",
                backgroundColor: "#2563EB",
                color: "white",
                textDecoration: "none",
                borderRadius: "10px",
                fontSize: "17px",
                fontWeight: "bold",
              }}
            >
              Shop Now
            </Link>

            <Link
              href="/artisans"
              style={{
                display: "inline-block",
                padding: "15px 30px",
                backgroundColor: "white",
                color: "#2563EB",
                border: "2px solid #2563EB",
                textDecoration: "none",
                borderRadius: "10px",
                fontSize: "17px",
                fontWeight: "bold",
              }}
            >
              Meet Artisans
            </Link>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div
          style={{
            flex: "1.2 1 450px",
            maxWidth: "700px",
            height: "min(520px, 70vw)",
            minHeight: "320px",
            overflow: "hidden",
            borderRadius: "20px",
            margin: "0 auto",
          }}
        >
          <img
            src="/images/hero/hero-artisans.jpg"
            alt="African artisans creating handmade crafts"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        style={{
          padding: "70px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(30px, 5vw, 38px)",
            color: "#2563EB",
            marginBottom: "40px",
          }}
        >
          Why Shop With Us?
        </h2>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "25px",
          }}
        >
          {[
            "Authentic Handmade Products",
            "Support Local Communities",
            "Secure Shopping",
            "Fast Delivery",
          ].map((item) => (
            <div
              key={item}
              style={{
                padding: "30px 20px",
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow:
                  "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ color: "#2563EB" }}>
                {item}
              </h3>

              <p
                style={{
                  color: "#555",
                  lineHeight: "1.7",
                }}
              >
                Quality handmade products created with
                passion by talented artisans.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section
        style={{
          padding: "70px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(30px, 5vw, 38px)",
            color: "#2563EB",
            marginBottom: "45px",
          }}
        >
          Featured Products
        </h2>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "30px",
          }}
        >
          {[
            {
              id: 1,
              name: "Handmade Wooden Bowl",
              image: "/images/wooden-bowl.jpg",
              price: "$35",
              rating: "4.8",
            },
            {
              id: 2,
              name: "African Beaded Necklace",
              image: "/images/necklace.jpg",
              price: "$25",
              rating: "4.9",
            },
            {
              id: 3,
              name: "Handwoven Basket",
              image: "/images/basket.jpg",
              price: "$45",
              rating: "4.7",
            },
          ].map((product) => (
            <article
              key={product.id}
              style={{
                backgroundColor: "white",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow:
                  "0 5px 15px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              <div style={{ padding: "20px" }}>
                <h3>{product.name}</h3>

                <p>⭐ {product.rating} / 5</p>

                <h3
                  style={{
                    color: "#2563EB",
                  }}
                >
                  {product.price}
                </h3>

                <Link
                  href={`/products/${product.id}`}
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "12px",
                    backgroundColor: "#2563EB",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "8px",
                    textAlign: "center",
                    fontWeight: "bold",
                    boxSizing: "border-box",
                  }}
                >
                  View Product
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          <Link
            href="/products"
            style={{
              display: "inline-block",
              padding: "14px 35px",
              backgroundColor: "#2563EB",
              color: "white",
              textDecoration: "none",
              borderRadius: "8px",
              fontWeight: "bold",
            }}
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* MEET OUR ARTISANS */}
      <section
        style={{
          padding: "70px 20px",
          backgroundColor: "#f8f9fa",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(30px, 5vw, 38px)",
            color: "#2563EB",
            marginBottom: "20px",
          }}
        >
          Meet Our Artisans
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#555",
            fontSize: "18px",
            maxWidth: "700px",
            margin: "0 auto 45px",
            lineHeight: "1.7",
          }}
        >
          Discover the talented creators behind our handmade
          products. Each artisan brings unique skills, culture,
          and passion to every piece they create.
        </p>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {[
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
          ].map((artisan) => (
            <article
              key={artisan.id}
              style={{
                backgroundColor: "white",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow:
                  "0 5px 15px rgba(0,0,0,0.1)",
              }}
            >
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

              <div style={{ padding: "25px" }}>
                <h3
                  style={{
                    color: "#2563EB",
                  }}
                >
                  {artisan.name}
                </h3>

                <h4>{artisan.craft}</h4>

                <p
                  style={{
                    color: "#555",
                    lineHeight: "1.6",
                  }}
                >
                  {artisan.story}
                </p>

                <Link
                  href={`/artisans/${artisan.id}`}
                  style={{
                    display: "block",
                    width: "100%",
                    marginTop: "15px",
                    padding: "12px",
                    backgroundColor: "#2563EB",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "8px",
                    textAlign: "center",
                    fontWeight: "bold",
                    boxSizing: "border-box",
                  }}
                >
                  View Artisan Profile
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section
        style={{
          padding: "70px 20px",
          backgroundColor: "#ffffff",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(30px, 5vw, 38px)",
            color: "#2563EB",
            marginBottom: "20px",
          }}
        >
          What Our Customers Say
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            maxWidth: "700px",
            margin: "0 auto 45px",
            fontSize: "18px",
            lineHeight: "1.7",
          }}
        >
          Read what customers around the world are saying about
          our handcrafted products and talented artisans.
        </p>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {[
            {
              name: "David Johnson",
              rating: "★★★★★",
              review:
                "The wooden bowl exceeded my expectations. Beautiful craftsmanship and excellent quality.",
            },
            {
              name: "Sarah Williams",
              rating: "★★★★★",
              review:
                "I absolutely love the beaded necklace. It arrived quickly and looks even better in person.",
            },
            {
              name: "Maria Gomez",
              rating: "★★★★☆",
              review:
                "The basket is sturdy and beautifully woven. I will definitely purchase again.",
            },
          ].map((review) => (
            <article
              key={review.name}
              style={{
                backgroundColor: "#f8f9fa",
                padding: "30px",
                borderRadius: "15px",
                boxShadow:
                  "0 5px 15px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ color: "#2563EB" }}>
                {review.name}
              </h3>

              <p
                style={{
                  fontSize: "22px",
                  margin: "15px 0",
                }}
              >
                {review.rating}
              </p>

              <p
                style={{
                  color: "#555",
                  lineHeight: "1.7",
                }}
              >
                "{review.review}"
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* MARKETPLACE STATISTICS */}
      <section
        style={{
          padding: "70px 20px",
          backgroundColor: "#2563EB",
          color: "white",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(30px, 5vw, 38px)",
            marginBottom: "50px",
          }}
        >
          Handcrafted Haven by the Numbers
        </h2>

        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "35px",
            textAlign: "center",
          }}
        >
          {[
            {
              number: "250+",
              title: "Talented Artisans",
            },
            {
              number: "1,200+",
              title: "Handcrafted Products",
            },
            {
              number: "15+",
              title: "Countries Reached",
            },
            {
              number: "3,500+",
              title: "Happy Customers",
            },
          ].map((item) => (
            <div key={item.title}>
              <h2
                style={{
                  fontSize: "clamp(38px, 6vw, 48px)",
                  marginBottom: "10px",
                }}
              >
                {item.number}
              </h2>

              <p
                style={{
                  fontSize: "19px",
                }}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section
        style={{
          padding: "80px 20px",
          backgroundColor: "#f8f9fa",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 42px)",
            color: "#1E3A8A",
            marginBottom: "20px",
          }}
        >
          Ready to Discover Authentic African Crafts?
        </h2>

        <p
          style={{
            fontSize: "18px",
            color: "#555",
            maxWidth: "700px",
            margin: "0 auto 40px",
            lineHeight: "1.8",
          }}
        >
          Explore our growing marketplace of handcrafted
          treasures, support talented African artisans, and bring
          home products that tell a story.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/products"
            style={{
              padding: "15px 30px",
              backgroundColor: "#2563EB",
              color: "white",
              textDecoration: "none",
              borderRadius: "8px",
              fontSize: "17px",
              fontWeight: "bold",
            }}
          >
            Explore Products
          </Link>

          <Link
            href="/artisans"
            style={{
              padding: "15px 30px",
              backgroundColor: "white",
              color: "#2563EB",
              border: "2px solid #2563EB",
              textDecoration: "none",
              borderRadius: "8px",
              fontSize: "17px",
              fontWeight: "bold",
            }}
          >
            Meet Our Artisans
          </Link>
        </div>
      </section>
    </main>
  );
}