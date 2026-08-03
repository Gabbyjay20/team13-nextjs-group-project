const reviews = [
  {
    id: 1,
    name: "Emily Carter",
    product: "Handmade Wooden Bowl",
    rating: 5,
    review:
      "The wooden bowl exceeded my expectations. Beautiful craftsmanship and excellent quality.",
  },
  {
    id: 2,
    name: "David Smith",
    product: "African Beaded Necklace",
    rating: 4,
    review:
      "A lovely necklace with amazing details. My wife absolutely loved it.",
  },
  {
    id: 3,
    name: "Sophia Johnson",
    product: "Handwoven Basket",
    rating: 5,
    review:
      "Very durable and stylish. It fits perfectly in my living room.",
  },
];

export default function ReviewsPage() {
  return (
    <main
      style={{
        padding: "50px 60px",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "40px",
          color: "#2563EB",
          marginBottom: "40px",
        }}
      >
        Customer Reviews
      </h1>

      <div
        style={{
          display: "grid",
          gap: "25px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {reviews.map((review) => (
          <div
            key={review.id}
            style={{
              backgroundColor: "white",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h2>{review.name}</h2>

            <p>
              <strong>Product:</strong> {review.product}
            </p>

            <p
              style={{
                color: "#F59E0B",
                fontSize: "20px",
                margin: "10px 0",
              }}
            >
              {"⭐".repeat(review.rating)}
            </p>

            <p
              style={{
                color: "#555",
                lineHeight: "1.8",
              }}
            >
              "{review.review}"
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}