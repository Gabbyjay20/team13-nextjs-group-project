export default function ContactPage() {
  return (
    <main
      style={{
        padding: "60px",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      <section
        style={{
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            color: "#2563EB",
            marginBottom: "15px",
          }}
        >
          Contact Us
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            color: "#555",
            lineHeight: "1.8",
            fontSize: "18px",
          }}
        >
          We'd love to hear from you. Whether you're an artisan interested in
          joining our marketplace or a customer with a question, we're here to
          help.
        </p>
      </section>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
          gap: "40px",
          alignItems: "start",
        }}
      >
        {/* Contact Information */}
        <div
          style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              color: "#2563EB",
              marginBottom: "20px",
            }}
          >
            Contact Information
          </h2>

          <p style={{ marginBottom: "15px" }}>
            📍 <strong>Address:</strong><br />
            25 Artisan Market Road<br />
            Lagos, Nigeria
          </p>

          <p style={{ marginBottom: "15px" }}>
            📞 <strong>Phone:</strong><br />
            +234 800 123 4567
          </p>

          <p style={{ marginBottom: "15px" }}>
            📧 <strong>Email:</strong><br />
            support@handcraftedhaven.com
          </p>

          <p style={{ marginBottom: "15px" }}>
            🕒 <strong>Business Hours:</strong><br />
            Monday – Friday<br />
            8:00 AM – 5:00 PM
          </p>
        </div>

        {/* Contact Form */}
        <div
          style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              color: "#2563EB",
              marginBottom: "20px",
            }}
          >
            Send Us a Message
          </h2>

          <form>
            <input
              type="text"
              placeholder="Full Name"
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "15px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />

            <input
              type="email"
              placeholder="Email Address"
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "15px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />

            <input
              type="text"
              placeholder="Subject"
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "15px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />

            <textarea
              placeholder="Your Message"
              rows={6}
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "20px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                resize: "vertical",
              }}
            ></textarea>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "15px",
                backgroundColor: "#2563EB",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}