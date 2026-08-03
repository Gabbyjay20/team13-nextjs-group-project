export default function AboutPage() {
  return (
    <main
      style={{
        padding: "60px",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            color: "#2563EB",
            marginBottom: "20px",
          }}
        >
          About Handcrafted Haven
        </h1>

        <p
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#555",
          }}
        >
          Handcrafted Haven is an online marketplace dedicated to connecting
          talented African artisans with customers around the world. Our
          platform celebrates creativity, preserves traditional craftsmanship,
          and empowers local communities by showcasing authentic handmade
          products.
        </p>
      </section>

      {/* Mission & Vision */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "30px",
          marginBottom: "60px",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              color: "#2563EB",
              marginBottom: "15px",
            }}
          >
            Our Mission
          </h2>

          <p
            style={{
              color: "#555",
              lineHeight: "1.8",
            }}
          >
            To empower artisans by providing a trusted online marketplace where
            handcrafted products can reach customers globally while preserving
            Africa's rich cultural heritage.
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#fff",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              color: "#2563EB",
              marginBottom: "15px",
            }}
          >
            Our Vision
          </h2>

          <p
            style={{
              color: "#555",
              lineHeight: "1.8",
            }}
          >
            To become Africa's leading marketplace for authentic handmade
            products while supporting artisans, promoting sustainability, and
            inspiring creativity worldwide.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section>
        <h2
          style={{
            textAlign: "center",
            color: "#2563EB",
            marginBottom: "40px",
            fontSize: "36px",
          }}
        >
          Why Choose Handcrafted Haven?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
            gap: "25px",
          }}
        >
          {[
            {
              title: "Authentic Handmade Products",
              description:
                "Every product is carefully handcrafted by experienced artisans using traditional techniques.",
            },
            {
              title: "Support Local Communities",
              description:
                "Every purchase directly supports skilled artisans and their families across Africa.",
            },
            {
              title: "Quality Craftsmanship",
              description:
                "We ensure every product meets high-quality standards before reaching our customers.",
            },
            {
              title: "Secure Shopping",
              description:
                "Our platform provides a safe and reliable shopping experience for buyers worldwide.",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
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
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}