import Link from "next/link";

export default function AboutPage() {
  return (
    <main
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      {/* HERO */}

      <section
        style={{
          padding: "70px 20px",
          textAlign: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "850px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              color: "#2563EB",
              fontWeight: "bold",
              fontSize: "18px",
              marginBottom: "10px",
            }}
          >
            ABOUT HANDCRAFTED HAVEN
          </p>

          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 56px)",
              color: "#1E3A8A",
              marginBottom: "25px",
              lineHeight: "1.2",
            }}
          >
            Celebrating African Craftsmanship
          </h1>

          <p
            style={{
              color: "#555",
              fontSize: "18px",
              lineHeight: "1.8",
            }}
          >
            Handcrafted Haven connects customers with talented
            African artisans and authentic handmade products.
            We believe every handcrafted item has a story,
            and every artisan deserves an opportunity to share
            that story with the world.
          </p>
        </div>
      </section>

      {/* OUR STORY */}

      <section
        style={{
          padding: "70px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "45px",
            alignItems: "center",
          }}
        >
          <div>
            <h2
              style={{
                color: "#2563EB",
                fontSize: "clamp(30px, 5vw, 40px)",
                marginBottom: "20px",
              }}
            >
              Our Story
            </h2>

            <p
              style={{
                color: "#555",
                lineHeight: "1.8",
                fontSize: "17px",
              }}
            >
              Handcrafted Haven was created to provide a
              digital marketplace where skilled artisans can
              showcase their creativity and connect with
              customers beyond their local communities.
            </p>

            <p
              style={{
                color: "#555",
                lineHeight: "1.8",
                fontSize: "17px",
              }}
            >
              From beautifully carved wooden products to
              handwoven baskets and African-inspired jewelry,
              our marketplace celebrates the creativity,
              culture, and dedication behind handmade products.
            </p>
          </div>

          <div>
            <img
              src="/images/hero/hero-artisans.jpg"
              alt="African artisans creating handcrafted products"
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "18px",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

      {/* OUR MISSION */}

      <section
        style={{
          padding: "70px 20px",
          backgroundColor: "#ffffff",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "850px",
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
            Our Mission
          </h2>

          <p
            style={{
              color: "#555",
              fontSize: "18px",
              lineHeight: "1.8",
            }}
          >
            Our mission is to make handcrafted African products
            easier to discover while helping artisans reach a
            wider audience. We want to encourage appreciation
            for traditional craftsmanship and support sustainable
            consumption.
          </p>
        </div>
      </section>

      {/* OUR VALUES */}

      <section
        style={{
          padding: "70px 20px",
          backgroundColor: "#f8f9fa",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#2563EB",
            fontSize: "clamp(30px, 5vw, 40px)",
            marginBottom: "45px",
          }}
        >
          What We Value
        </h2>

        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "25px",
          }}
        >
          {[
            {
              title: "Authenticity",
              text: "We celebrate genuine handmade products and the unique stories behind them.",
            },
            {
              title: "Community",
              text: "We connect customers with artisans and help strengthen creative communities.",
            },
            {
              title: "Craftsmanship",
              text: "We appreciate the skill, patience, and creativity required to create handmade products.",
            },
            {
              title: "Sustainability",
              text: "We encourage responsible consumption and appreciation for products made with care.",
            },
          ].map((value) => (
            <article
              key={value.title}
              style={{
                backgroundColor: "white",
                padding: "30px 25px",
                borderRadius: "14px",
                boxShadow:
                  "0 4px 12px rgba(0,0,0,0.08)",
              }}
            >
              <h3
                style={{
                  color: "#2563EB",
                  fontSize: "22px",
                  marginBottom: "12px",
                }}
              >
                {value.title}
              </h3>

              <p
                style={{
                  color: "#555",
                  lineHeight: "1.7",
                }}
              >
                {value.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}

      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          backgroundColor: "#2563EB",
          color: "white",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(30px, 5vw, 42px)",
            marginBottom: "20px",
          }}
        >
          Discover Something Handmade
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto 30px",
            fontSize: "18px",
            lineHeight: "1.7",
          }}
        >
          Explore unique products, meet talented artisans,
          and support African craftsmanship.
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
              padding: "14px 28px",
              backgroundColor: "white",
              color: "#2563EB",
              textDecoration: "none",
              borderRadius: "8px",
              fontWeight: "bold",
            }}
          >
            Explore Products
          </Link>

          <Link
            href="/artisans"
            style={{
              padding: "14px 28px",
              backgroundColor: "#1E3A8A",
              color: "white",
              textDecoration: "none",
              borderRadius: "8px",
              fontWeight: "bold",
            }}
          >
            Meet Artisans
          </Link>
        </div>
      </section>
    </main>
  );
}