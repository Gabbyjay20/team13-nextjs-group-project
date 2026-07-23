export default function Hero() {
  return (
    <section
      style={{
        backgroundColor: "#2563EB",
        color: "white",
        textAlign: "center",
        padding: "80px 20px",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Handcrafted Haven
      </h1>

      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "700px",
          margin: "0 auto",
          lineHeight: "1.8",
        }}
      >
        Discover beautiful handmade products crafted by talented local artisans.
        Support local creativity and shop unique handmade items made with
        passion and care.
      </p>

      <button
        style={{
          marginTop: "30px",
          padding: "15px 35px",
          fontSize: "18px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "white",
          color: "#2563EB",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Shop Now
      </button>
    </section>
  );
}