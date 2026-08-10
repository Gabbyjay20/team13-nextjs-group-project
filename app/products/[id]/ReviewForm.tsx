"use client";

import { useState } from "react";

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (rating === 0) {
      alert("Please select a rating.");
      return;
    }

    if (review.trim() === "") {
      alert("Please write a review.");
      return;
    }

    setSubmitted(true);
  }

  return (
    <section
      style={{
        marginTop: "60px",
        padding: "35px",
        backgroundColor: "#f8f9fa",
        borderRadius: "15px",
      }}
    >
      <h2
        style={{
          color: "#1E3A8A",
          fontSize: "32px",
          marginBottom: "10px",
        }}
      >
        Reviews & Ratings
      </h2>

      <p
        style={{
          color: "#666",
          marginBottom: "30px",
        }}
      >
        Share your experience with this handmade product.
      </p>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <h3>Give this product a rating</h3>

          <div
            style={{
              display: "flex",
              gap: "5px",
              marginBottom: "25px",
            }}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                aria-label={`Rate ${star} stars`}
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  fontSize: "35px",
                  color:
                    star <= rating
                      ? "#F59E0B"
                      : "#D1D5DB",
                }}
              >
                ★
              </button>
            ))}
          </div>

          <label
            htmlFor="review"
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "8px",
            }}
          >
            Write your review
          </label>

          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Tell us what you think about this product..."
            rows={5}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
              resize: "vertical",
              boxSizing: "border-box",
            }}
          />

          <button
            type="submit"
            style={{
              marginTop: "15px",
              padding: "13px 25px",
              backgroundColor: "#2563EB",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Submit Review
          </button>
        </form>
      ) : (
        <div
          style={{
            backgroundColor: "white",
            padding: "25px",
            borderRadius: "12px",
            border: "1px solid #ddd",
          }}
        >
          <h3>Thank you for your review! 🎉</h3>

          <p
            style={{
              color: "#F59E0B",
              fontSize: "25px",
            }}
          >
            {"★".repeat(rating)}
            {"☆".repeat(5 - rating)}
          </p>

          <p
            style={{
              color: "#555",
              lineHeight: "1.7",
            }}
          >
            {review}
          </p>

          <button
            onClick={() => {
              setSubmitted(false);
              setRating(0);
              setReview("");
            }}
            style={{
              padding: "10px 20px",
              backgroundColor: "#6B7280",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Write Another Review
          </button>
        </div>
      )}
    </section>
  );
}