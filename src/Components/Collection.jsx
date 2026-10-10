import { useEffect, useState } from "react";
import Image from "../assets/collection-img.png";
import "../Style/Collection.css";
import ProductCard from "./ProductCard";

const API = "http://localhost:8085";

export const Collection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Accessible to both loadProduct and the cleanup.
    const controller = new AbortController();

    async function loadProduct() {
      try {
        const response = await fetch(`${API}/getAllProduct`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(
            `Could not load products (${response.status})`
          );
        }

        const data = await response.json();
        console.log(data);
        
        setProducts(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadProduct();

    return () => controller.abort();
  }, []);

  if (loading) {
    return <p className="p-8 text-center">Loading products...</p>;
  }

  if (error) {
    return (
      <p role="alert" className="p-8 text-center text-red-600">
        {error}
      </p>
    );
  }

  return (
    <>
      <div className="collection-img">
        <img
          src={Image}
          alt="Collection banner"
          style={{ height: "500px" }}
        />
      </div>

      <div className="filters flex flex-row flex-wrap mt-2  gap-4 bg-[#FDFAF4]">
        <button type="button">All</button>

        <div className="relative">
          <select
            defaultValue=""
            className="category-dropdown appearance-none rounded-xl
                       border border-green-200 bg-white py-3 pl-4 pr-10
                       text-sm font-medium text-[#1C3A2E] cursor-pointer
                       transition focus:ring-2 focus:ring-green-100"
          >
            <option value="">Choose category</option>
            <option value="1">Foliage Plants</option>
            <option value="2">Flowering Plants</option>
            <option value="3">Succulents &amp; Cacti</option>
            <option value="4">Herbs &amp; Edible Greens</option>
            <option value="5">Fruit Plants</option>
            <option value="6">Climbers &amp; Vines</option>
          </select>

          <svg
            className="pointer-events-none absolute right-4 top-1/2
                       h-4 w-4 -translate-y-1/2 text-green-800"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>

        <button type="button">Indoor</button>
        <button type="button">Outdoor</button>
        <button type="button">Low cost</button>
        <button type="button">High cost</button>
      </div>

      <div
        className="products bg-[#FDFAF4] px-6 py-10 grid
                   grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                   gap-10 lg:px-20"
      >
        {products.length === 0 ? (
          <p className="col-span-full text-center">
            No products available.
          </p>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </>
  );
};