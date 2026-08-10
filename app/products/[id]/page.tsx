import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../../data/products";
import ReviewForm from "./ReviewForm";

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
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        padding: "40px 20px 70px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* BACK TO PRODUCTS */}

        <Link
          href="/products"
          style={{
            display: "inline-block",
            color: "#2563EB",
            textDecoration: "none",
            fontWeight: "bold",
            marginBottom: "25px",
          }}
        >
          ← Back to Products
        </Link>

        {/* PRODUCT INFORMATION */}

        <section
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "40px",
            alignItems: "center",
          }}
        >
          {/* PRODUCT IMAGE */}

          <div
            style={{
              width: "100%",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "auto",
                aspectRatio: "1 / 1",
                objectFit: "cover",
                borderRadius: "15px",
                display: "block",
                margin: "0 auto",
              }}
            />
          </div>

          {/* PRODUCT INFORMATION */}

          <div
            style={{
              width: "100%",
            }}
          >
            <p
              style={{
                color: "#2563EB",
                fontWeight: "bold",
                fontSize: "16px",
                marginBottom: "10px",
              }}
            >
              {product.category}
            </p>

            <h1
              style={{
                fontSize: "clamp(32px, 6vw, 48px)",
                lineHeight: "1.15",
                marginBottom: "20px",
                color: "#111827",
              }}
            >
              {product.name}
            </h1>

            <p
              style={{
                fontSize: "18px",
                marginBottom: "12px",
              }}
            >
              <strong>Artisan:</strong>{" "}
              {product.artisan}
            </p>

            <p
              style={{
                color: "#F59E0B",
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "15px",
              }}
            >
              ⭐ {product.rating} / 5
            </p>

            <h2
              style={{
                color: "#2563EB",
                fontSize: "32px",
                marginBottom: "20px",
              }}
            >
              {product.price}
            </h2>

            <p
              style={{
                color: "#555",
                fontSize: "17px",
                lineHeight: "1.8",
                marginBottom: "25px",
              }}
            >
              {product.description}
            </p>

            {/* CONTACT ARTISAN */}

            <Link
              href={`/artisans/${product.artisanId}`}
              style={{
                display: "inline-block",
                width: "100%",
                maxWidth: "300px",
                boxSizing: "border-box",
                textAlign: "center",
                backgroundColor: "#2563EB",
                color: "white",
                padding: "14px 25px",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Contact Artisan
            </Link>
          </div>
        </section>

        {/* PRODUCT INFORMATION CARD */}

        <section
          style={{
            marginTop: "60px",
            padding: "30px",
            backgroundColor: "#f8f9fa",
            borderRadius: "15px",
          }}
        >
          <h2
            style={{
              color: "#1E3A8A",
              fontSize: "28px",
              marginBottom: "20px",
            }}
          >
            Product Information
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
            }}
          >
            <div>
              <strong>Product</strong>
              <p>{product.name}</p>
            </div>

            <div>
              <strong>Category</strong>
              <p>{product.category}</p>
            </div>

            <div>
              <strong>Artisan</strong>
              <p>{product.artisan}</p>
            </div>

            <div>
              <strong>Rating</strong>
              <p>⭐ {product.rating} / 5</p>
            </div>
          </div>
        </section>

        {/* REVIEWS */}

        <ReviewForm />
      </div>
    </main>
  );
}