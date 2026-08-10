"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { products } from "../data/products";

type CartItem = {
  productId: number;
  quantity: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("handcrafted-cart");

    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch {
        setCart([]);
      }
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem(
        "handcrafted-cart",
        JSON.stringify(cart)
      );
    }
  }, [cart, loaded]);

  function increaseQuantity(productId: number) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.productId === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  function decreaseQuantity(productId: number) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.productId === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeItem(productId: number) {
    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.productId !== productId
      )
    );
  }

  function clearCart() {
    setCart([]);
  }

  const cartProducts = cart
    .map((item) => {
      const product = products.find(
        (product) => product.id === item.productId
      );

      if (!product) return null;

      return {
        ...product,
        quantity: item.quantity,
      };
    })
    .filter(Boolean);

  const total = cartProducts.reduce((sum, product) => {
    if (!product) return sum;

    const price = Number(
      product.price.replace("$", "")
    );

    return sum + price * product.quantity;
  }, 0);

  if (!loaded) {
    return (
      <main
        style={{
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h1>Loading Cart...</h1>
      </main>
    );
  }

  return (
    <main
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        padding: "50px 20px 80px",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* TITLE */}

        <h1
          style={{
            textAlign: "center",
            fontSize: "clamp(32px, 6vw, 44px)",
            color: "#2563EB",
            marginBottom: "40px",
          }}
        >
          Shopping Cart
        </h1>

        {/* EMPTY CART */}

        {cartProducts.length === 0 ? (
          <section
            style={{
              backgroundColor: "white",
              padding: "50px 25px",
              borderRadius: "15px",
              textAlign: "center",
              boxShadow:
                "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <h2>Your cart is empty</h2>

            <p
              style={{
                color: "#666",
                lineHeight: "1.7",
                marginBottom: "25px",
              }}
            >
              You haven't added any handmade products yet.
            </p>

            <Link
              href="/products"
              style={{
                display: "inline-block",
                padding: "14px 30px",
                backgroundColor: "#2563EB",
                color: "white",
                textDecoration: "none",
                borderRadius: "8px",
                fontWeight: "bold",
              }}
            >
              Explore Products
            </Link>
          </section>
        ) : (
          <>
            {/* CART ITEMS */}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {cartProducts.map((product) => {
                if (!product) return null;

                const price = Number(
                  product.price.replace("$", "")
                );

                return (
                  <article
                    key={product.id}
                    style={{
                      backgroundColor: "white",
                      borderRadius: "12px",
                      padding: "20px",
                      boxShadow:
                        "0 4px 12px rgba(0,0,0,0.08)",
                      display: "flex",
                      gap: "20px",
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    {/* IMAGE */}

                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: "140px",
                        height: "140px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />

                    {/* PRODUCT INFO */}

                    <div
                      style={{
                        flex: 1,
                        minWidth: "220px",
                      }}
                    >
                      <h2
                        style={{
                          marginBottom: "8px",
                        }}
                      >
                        {product.name}
                      </h2>

                      <p
                        style={{
                          color: "#555",
                        }}
                      >
                        Artisan: {product.artisan}
                      </p>

                      <p
                        style={{
                          color: "#2563EB",
                          fontWeight: "bold",
                          fontSize: "20px",
                        }}
                      >
                        {product.price}
                      </p>
                    </div>

                    {/* QUANTITY */}

                    <div
                      style={{
                        textAlign: "center",
                      }}
                    >
                      <p
                        style={{
                          fontWeight: "bold",
                          marginBottom: "8px",
                        }}
                      >
                        Quantity
                      </p>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <button
                          type="button"
                          onClick={() =>
                            decreaseQuantity(product.id)
                          }
                          aria-label={`Decrease quantity of ${product.name}`}
                          style={{
                            width: "35px",
                            height: "35px",
                            border: "none",
                            borderRadius: "6px",
                            backgroundColor: "#E5E7EB",
                            cursor: "pointer",
                            fontSize: "20px",
                          }}
                        >
                          −
                        </button>

                        <strong>
                          {product.quantity}
                        </strong>

                        <button
                          type="button"
                          onClick={() =>
                            increaseQuantity(product.id)
                          }
                          aria-label={`Increase quantity of ${product.name}`}
                          style={{
                            width: "35px",
                            height: "35px",
                            border: "none",
                            borderRadius: "6px",
                            backgroundColor: "#2563EB",
                            color: "white",
                            cursor: "pointer",
                            fontSize: "20px",
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* ITEM TOTAL */}

                    <div
                      style={{
                        minWidth: "100px",
                        textAlign: "right",
                      }}
                    >
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: "18px",
                        }}
                      >
                        ${(price * product.quantity).toFixed(2)}
                      </p>

                      <button
                        type="button"
                        onClick={() =>
                          removeItem(product.id)
                        }
                        style={{
                          border: "none",
                          background: "none",
                          color: "#DC2626",
                          cursor: "pointer",
                          fontWeight: "bold",
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* CART SUMMARY */}

            <section
              style={{
                marginTop: "30px",
                backgroundColor: "white",
                padding: "25px",
                borderRadius: "12px",
                boxShadow:
                  "0 4px 12px rgba(0,0,0,0.08)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "20px",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <div>
                  <p
                    style={{
                      color: "#666",
                      marginBottom: "5px",
                    }}
                  >
                    Cart Total
                  </p>

                  <h2
                    style={{
                      color: "#2563EB",
                      fontSize: "32px",
                      margin: 0,
                    }}
                  >
                    ${total.toFixed(2)}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={clearCart}
                  style={{
                    padding: "10px 18px",
                    backgroundColor: "#FEE2E2",
                    color: "#DC2626",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Clear Cart
                </button>
              </div>

              {/* ACTIONS */}

              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  flexWrap: "wrap",
                  marginTop: "25px",
                }}
              >
                <button
                  type="button"
                  onClick={() =>
                    alert(
                      "Checkout will be available soon."
                    )
                  }
                  style={{
                    flex: "1 1 200px",
                    padding: "15px",
                    backgroundColor: "#2563EB",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  Checkout
                </button>

                <Link
                  href="/products"
                  style={{
                    flex: "1 1 200px",
                    padding: "15px",
                    backgroundColor: "white",
                    color: "#2563EB",
                    border: "2px solid #2563EB",
                    borderRadius: "8px",
                    textDecoration: "none",
                    textAlign: "center",
                    fontWeight: "bold",
                    boxSizing: "border-box",
                  }}
                >
                  Continue Shopping
                </Link>
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  );
}