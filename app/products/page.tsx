"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "../data/products";

type CartItem = {
  productId: number;
  quantity: number;
};

export default function ProductsPage() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === "All" ||
      product.category === category;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  function addToCart(productId: number) {
    const savedCart = localStorage.getItem(
      "handcrafted-cart"
    );

    let cart: CartItem[] = [];

    if (savedCart) {
      try {
        cart = JSON.parse(savedCart);
      } catch {
        cart = [];
      }
    }

    const existingItem = cart.find(
      (item) => item.productId === productId
    );

    if (existingItem) {
      cart = cart.map((item) =>
        item.productId === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    } else {
      cart.push({
        productId,
        quantity: 1,
      });
    }

    localStorage.setItem(
      "handcrafted-cart",
      JSON.stringify(cart)
    );

    const product = products.find(
      (item) => item.id === productId
    );

    setMessage(
      `${product?.name ?? "Product"} added to cart!`
    );

    setTimeout(() => {
      setMessage("");
    }, 2500);
  }

  return (
    <main
      style={{
        padding: "50px 20px 80px",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* PAGE TITLE */}

        <h1
          style={{
            textAlign: "center",
            fontSize: "clamp(32px, 6vw, 42px)",
            color: "#2563EB",
            marginBottom: "30px",
          }}
        >
          Handmade Products
        </h1>

        {/* CART LINK */}

        <div
          style={{
            textAlign: "right",
            marginBottom: "20px",
          }}
        >
          <Link
            href="/cart"
            style={{
              display: "inline-block",
              padding: "12px 20px",
              backgroundColor: "#1E3A8A",
              color: "white",
              textDecoration: "none",
              borderRadius: "8px",
              fontWeight: "bold",
            }}
          >
            🛒 View Cart
          </Link>
        </div>

        {/* SUCCESS MESSAGE */}

        {message && (
          <div
            role="status"
            style={{
              backgroundColor: "#DCFCE7",
              color: "#166534",
              padding: "15px",
              borderRadius: "8px",
              textAlign: "center",
              marginBottom: "25px",
              fontWeight: "bold",
            }}
          >
            ✓ {message}
          </div>
        )}

        {/* SEARCH */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          <label
            htmlFor="product-search"
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "8px",
            }}
          >
            Search Products
          </label>

          <input
            id="product-search"
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            style={{
              width: "100%",
              maxWidth: "500px",
              padding: "13px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              fontSize: "16px",
            }}
          />
        </div>

        {/* FILTERS */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
            marginBottom: "40px",
          }}
        >
          {[
            "All",
            "Home Decor",
            "Jewelry",
            "Crafts",
          ].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              style={{
                padding: "10px 18px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                backgroundColor:
                  category === item
                    ? "#2563EB"
                    : "#ddd",
                color:
                  category === item
                    ? "white"
                    : "black",
                fontWeight: "bold",
              }}
            >
              {item}
            </button>
          ))}
        </div>

        {/* PRODUCTS */}

        {filteredProducts.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "50px 20px",
              backgroundColor: "white",
              borderRadius: "12px",
            }}
          >
            <h2>No products found</h2>

            <p>
              Try another search term or category.
            </p>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "30px",
            }}
          >
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                style={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow:
                    "0 4px 12px rgba(0,0,0,0.1)",
                }}
              >
                {/* PRODUCT IMAGE */}

                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <div
                  style={{
                    padding: "20px",
                  }}
                >
                  <h2
                    style={{
                      marginBottom: "10px",
                    }}
                  >
                    {product.name}
                  </h2>

                  <p>
                    <strong>
                      Category:
                    </strong>{" "}
                    {product.category}
                  </p>

                  <p
                    style={{
                      color: "#555",
                      lineHeight: "1.6",
                    }}
                  >
                    {product.description}
                  </p>

                  <p>
                    <strong>
                      Artisan:
                    </strong>{" "}
                    {product.artisan}
                  </p>

                  <p
                    style={{
                      color: "#F59E0B",
                      fontWeight: "bold",
                    }}
                  >
                    ⭐ {product.rating} / 5
                  </p>

                  <h3
                    style={{
                      color: "#2563EB",
                      fontSize: "24px",
                    }}
                  >
                    {product.price}
                  </h3>

                  {/* VIEW PRODUCT */}

                  <Link
                    href={`/products/${product.id}`}
                    style={{
                      display: "block",
                      width: "100%",
                      padding: "12px",
                      backgroundColor: "#2563EB",
                      color: "white",
                      textDecoration: "none",
                      borderRadius: "8px",
                      textAlign: "center",
                      fontWeight: "bold",
                      boxSizing: "border-box",
                      marginBottom: "10px",
                    }}
                  >
                    View Product
                  </Link>

                  {/* ADD TO CART */}

                  <button
                    type="button"
                    onClick={() =>
                      addToCart(product.id)
                    }
                    style={{
                      width: "100%",
                      padding: "12px",
                      backgroundColor: "#1E3A8A",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    🛒 Add to Cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}