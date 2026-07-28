export default function ContactPage() {
  return (
    <main style={{ padding: "50px 60px" }}>
      <h1
        style={{
          fontSize: "36px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Contact Us
      </h1>

      <p
        style={{
          fontSize: "18px",
          lineHeight: "1.7",
          maxWidth: "700px",
        }}
      >
        We would love to hear from you. Whether you have questions about
        products, want to become an artisan, or need support, contact us.
      </p>

      <div style={{ marginTop: "30px" }}>
        <p>
          <strong>Email:</strong> info@handcraftedhaven.com
        </p>

        <p>
          <strong>Phone:</strong> +1 (555) 123-4567
        </p>

        <p>
          <strong>Address:</strong> Artisan Community Marketplace
        </p>
      </div>
    </main>
  );
}