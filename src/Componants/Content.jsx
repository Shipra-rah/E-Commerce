import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataCard from "../Data/DataCard";
import Product from "../Data/clothes.json";
import SearchContext from "../Contexts/SearchContext";

const Content = () => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const itemsPerPage = 9;

  const { searchItem, setSearchItem } = useContext(SearchContext);

  // Filter products based on search
  const filteredProducts = Product.filter((item) => {
    const query = searchItem.trim().toLowerCase();

    if (!query) return true;

    const fields = [item.name, item.description, item.category];
    const searchableText = fields
      .filter(Boolean)
      .map((f) => f.toLowerCase())
      .join(" ");

    const queryWords = query.split(" ");

    return queryWords.every((word) => searchableText.includes(word));
  });

  // Pagination logic
  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="flex flex-col h-auto w-full lg:w-9/12 px-6 py-8">
      {/* If no products found */}
      {filteredProducts.length === 0 ? (
        <div className="flex flex-col py-20 text-center items-center justify-center">
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">
            😔 Sorry, no products found
          </h2>
          <p className="mb-6 text-gray-500">
            We couldn’t find anything for "
            <span className="font-medium">{searchItem}</span>"
          </p>
          <button
            onClick={() => setSearchItem("")}
            className="px-6 py-2 text-white bg-black rounded-lg hover:bg-gray-800 transition"
          >
            Back to All Products
          </button>
        </div>
      ) : (
        <>
          {/* Product Grid */}
          <div className="md:w-full grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {currentProducts.map((product) => (
              <DataCard
                key={product.id}
                products={product}
                onClick={() => navigate(`/product/${product.id}`)}
              />
            ))}
          </div>

          {/* Pagination */}
          {filteredProducts.length > itemsPerPage && (
            <div className="flex mt-6 space-x-4 justify-center">
              <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
                disabled={page === 0}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() =>
                  setPage((prev) => Math.min(prev + 1, totalPages - 1))
                }
                disabled={page === totalPages - 1}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Content;
