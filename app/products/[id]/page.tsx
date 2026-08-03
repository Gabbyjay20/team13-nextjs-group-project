import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../../data/products";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetailsPage({
  params,
}: PageProps) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    notFound();
  }

  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <Link
        href="/products"
        style={{
          color: "#2563EB",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        ← Back to Products
      </Link>

      <div
        style={{
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
          marginTop: "30px",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "420px",
            maxWidth: "100%",
            height: "420px",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />

        <div style={{ flex: 1 }}>
          <h1
            style={{
              fontSize: "40px",
              marginBottom: "20px",
            }}
          >
            {product.name}
          </h1>

          <p>
            <strong>Category:</strong> {product.category}
          </p>

          <p>
            <strong>Artisan:</strong> {product.artisan}
          </p>

          <p>
            ⭐ {product.rating} / 5
          </p>

          <h2
            style={{
              color: "#2563EB",
              fontSize: "28px",
            }}
          >
            {product.price}
          </h2>

          <p
            style={{
              marginTop: "20px",
              lineHeight: "1.8",
            }}
          >
            {product.description}
          </p>

          <button
            style={{
              marginTop: "30px",
              backgroundColor: "#2563EB",
              color: "white",
              padding: "14px 30px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Contact Artisan
          </button>
        </div>
      </div>
    </main>
  );
}