"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main
      style={{
        padding: "60px 20px",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      {/* PAGE HEADER */}

      <section
        style={{
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(36px, 6vw, 48px)",
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
          We'd love to hear from you. Whether you're an artisan
          interested in joining our marketplace or a customer
          with a question, we're here to help.
        </p>
      </section>

      {/* CONTACT CONTENT */}

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "40px",
          alignItems: "start",
        }}
      >
        {/* CONTACT INFORMATION */}

        <section
          style={{
            backgroundColor: "#ffffff",
            padding: "30px",
            borderRadius: "12px",
            boxShadow:
              "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              color: "#2563EB",
              marginBottom: "25px",
              fontSize: "28px",
            }}
          >
            Contact Information
          </h2>

          <div style={{ lineHeight: "1.7" }}>
            <p style={{ marginBottom: "20px" }}>
              <strong>📍 Address</strong>
              <br />
              25 Artisan Market Road
              <br />
              Lagos, Nigeria
            </p>

            <p style={{ marginBottom: "20px" }}>
              <strong>📞 Phone</strong>
              <br />
              <a
                href="tel:+2348001234567"
                style={{
                  color: "#2563EB",
                  textDecoration: "none",
                }}
              >
                +234 800 123 4567
              </a>
            </p>

            <p style={{ marginBottom: "20px" }}>
              <strong>📧 Email</strong>
              <br />
              <a
                href="mailto:support@handcraftedhaven.com"
                style={{
                  color: "#2563EB",
                  textDecoration: "none",
                }}
              >
                support@handcraftedhaven.com
              </a>
            </p>

            <p style={{ marginBottom: "20px" }}>
              <strong>🕒 Business Hours</strong>
              <br />
              Monday – Friday
              <br />
              8:00 AM – 5:00 PM
            </p>
          </div>
        </section>

        {/* CONTACT FORM */}

        <section
          style={{
            backgroundColor: "#ffffff",
            padding: "30px",
            borderRadius: "12px",
            boxShadow:
              "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              color: "#2563EB",
              marginBottom: "25px",
              fontSize: "28px",
            }}
          >
            Send Us a Message
          </h2>

          {submitted ? (
            <div
              style={{
                padding: "25px",
                backgroundColor: "#EFF6FF",
                borderRadius: "10px",
                border: "1px solid #93C5FD",
              }}
            >
              <h3
                style={{
                  color: "#1E3A8A",
                  marginBottom: "10px",
                }}
              >
                Message Sent! 🎉
              </h3>

              <p
                style={{
                  color: "#555",
                  lineHeight: "1.7",
                }}
              >
                Thank you for contacting Handcrafted Haven.
                We will get back to you as soon as possible.
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                style={{
                  marginTop: "15px",
                  padding: "10px 20px",
                  backgroundColor: "#2563EB",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* NAME */}

              <label
                htmlFor="name"
                style={{
                  display: "block",
                  fontWeight: "bold",
                  marginBottom: "7px",
                }}
              >
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                required
                style={{
                  width: "100%",
                  padding: "13px",
                  marginBottom: "18px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  boxSizing: "border-box",
                  fontSize: "16px",
                }}
              />

              {/* EMAIL */}

              <label
                htmlFor="email"
                style={{
                  display: "block",
                  fontWeight: "bold",
                  marginBottom: "7px",
                }}
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                style={{
                  width: "100%",
                  padding: "13px",
                  marginBottom: "18px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  boxSizing: "border-box",
                  fontSize: "16px",
                }}
              />

              {/* SUBJECT */}

              <label
                htmlFor="subject"
                style={{
                  display: "block",
                  fontWeight: "bold",
                  marginBottom: "7px",
                }}
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What is your message about?"
                required
                style={{
                  width: "100%",
                  padding: "13px",
                  marginBottom: "18px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  boxSizing: "border-box",
                  fontSize: "16px",
                }}
              />

              {/* MESSAGE */}

              <label
                htmlFor="message"
                style={{
                  display: "block",
                  fontWeight: "bold",
                  marginBottom: "7px",
                }}
              >
                Your Message
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Write your message..."
                rows={6}
                required
                style={{
                  width: "100%",
                  padding: "13px",
                  marginBottom: "20px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  resize: "vertical",
                  boxSizing: "border-box",
                  fontSize: "16px",
                }}
              />

              {/* SUBMIT */}

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "15px",
                  backgroundColor: "#2563EB",
                  color: "#ffffff",
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
          )}
        </section>
      </div>
    </main>
  );
}