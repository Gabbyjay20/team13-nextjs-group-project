"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "../data/products";

export default function ProductsPage() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === "All" || product.category === category;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

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
          fontSize: "36px",
          color: "#2563EB",
          marginBottom: "30px",
        }}
      >
        Handmade Products
      </h1>

      {/* Search */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "350px",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* Filters */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap",
          marginBottom: "40px",
        }}
      >
        {["All", "Home Decor", "Jewelry", "Crafts"].map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            style={{
              padding: "10px 20px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              backgroundColor:
                category === item ? "#2563EB" : "#ddd",
              color:
                category === item ? "white" : "black",
              fontWeight: "bold",
            }}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Products */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow:
                "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h2>{product.name}</h2>

              <p>
                <strong>Category:</strong>{" "}
                {product.category}
              </p>

              <p>{product.description}</p>

              <p>
                <strong>Artisan:</strong>{" "}
                {product.artisan}
              </p>

              <p>
                ⭐ {product.rating} / 5
              </p>

              <h3
                style={{
                  color: "#2563EB",
                }}
              >
                {product.price}
              </h3>

              <Link href={`/products/${product.id}`}>
                <button
                  style={{
                    width: "100%",
                    padding: "12px",
                    backgroundColor: "#2563EB",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  View Product
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}