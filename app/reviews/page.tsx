const reviews = [
  {
    id: 1,
    customer: "David",
    product: "Handmade Wooden Bowl",
    rating: "★★★★★",
    comment:
      "Excellent quality and beautiful craftsmanship. I love this product.",
  },
  {
    id: 2,
    customer: "Mary",
    product: "African Beaded Necklace",
    rating: "★★★★☆",
    comment:
      "The design is beautiful and the handmade details are amazing.",
  },
  {
    id: 3,
    customer: "John",
    product: "Handwoven Basket",
    rating: "★★★★★",
    comment:
      "A very durable and unique handmade product.",
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
          fontSize: "36px",
          fontWeight: "bold",
          marginBottom: "40px",
          color: "#2563EB",
        }}
      >
        Customer Reviews
      </h1>

      <div
        style={{
          display: "grid",
          gap: "25px",
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
            <h2>{review.product}</h2>

            <p>
              <strong>Customer:</strong> {review.customer}
            </p>

            <p
              style={{
                color: "#f59e0b",
                fontSize: "22px",
              }}
            >
              {review.rating}
            </p>

            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </main>
  );
}