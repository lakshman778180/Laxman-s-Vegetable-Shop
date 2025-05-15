"use client";

import { useState, useEffect } from "react";
import ProductCard from "./product-card";
import type { Product } from "@/lib/types";
import { Search, Filter } from "lucide-react";

interface ProductListProps {
  showFilters?: boolean;
}

export default function ProductList({ showFilters = false }: ProductListProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // In a real app, this would be an API call
        // For this demo, we'll simulate loading from a JSON file
        setLoading(true);

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock data
        const data: Product[] = [
          {
            id: "1",
            name: "Fresh Tomatoes",
            description: "Juicy, ripe tomatoes perfect for salads and cooking.",
            price: 40,
            category: "fruits",
            image: "https://media.istockphoto.com/id/140453734/photo/fresh-tomatoes.jpg?s=612x612&w=0&k=20&c=b6XySPuRKF6opBf0bexh9AhkWck-c7TaoJvRdVNBgT0=",
          },
          {
            id: "2",
            name: "Spinach",
            description:
              "Nutrient-rich leafy greens, locally grown and harvested.",
            price: 30,
            category: "leafy",
            image: "https://m.media-amazon.com/images/I/71tdN2taTCL.jpg",
          },
          {
            id: "3",
            name: "Carrots",
            description:
              "Sweet and crunchy carrots, excellent source of vitamins.",
            price: 35,
            category: "root",
            image: "https://images.unsplash.com/photo-1633380110125-f6e685676160?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2Fycm90c3xlbnwwfHwwfHx8MA%3D%3D",
          },
          {
            id: "4",
            name: "Potatoes",
            description:
              "Versatile potatoes perfect for boiling, mashing, or roasting.",
            price: 25,
            category: "root",
            image: "https://media.istockphoto.com/id/157430678/photo/three-potatoes.jpg?s=612x612&w=0&k=20&c=qkMoEgcj8ZvYbzDYEJEhbQ57v-nmkHS7e88q8dv7TSA=",
          },
          {
            id: "5",
            name: "Bell Peppers",
            description:
              "Colorful and crunchy bell peppers, great for stir-fries.",
            price: 60,
            category: "fruits",
            image: "https://cdn.pixabay.com/photo/2014/08/18/23/11/bell-peppers-421087_640.jpg",
          },
          {
            id: "6",
            name: "Cucumber",
            description: "Cool and refreshing cucumbers, perfect for salads.",
            price: 30,
            category: "fruits",
            image: "https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg",
          },
          {
            id: "7",
            name: "Onions",
            description: "Essential cooking ingredient with a strong flavor.",
            price: 20,
            category: "root",
            image:
              "https://media.istockphoto.com/id/499146870/photo/red-onions.jpg?s=612x612&w=0&k=20&c=OaZUynAtxIJyPaSgAsAGWwAbpTs_EfKF5zT_UvBDpbY=",
          },
          {
            id: "8",
            name: "Cabbage",
            description: "Crisp and versatile cabbage for salads and cooking.",
            price: 35,
            category: "leafy",
            image: "https://media.istockphoto.com/id/673162168/photo/green-cabbage-isolated-on-white.jpg?s=612x612&w=0&k=20&c=mCc4mXATvCcfp2E9taRJBp-QPYQ_LCj6nE1D7geaqVk=",
          },
          {
            id: "9",
            name: "Cauliflower",
            description:
              "Mild-flavored cauliflower, perfect for various dishes.",
            price: 45,
            category: "cruciferous",
            image: "https://m.media-amazon.com/images/I/91EdPVzD99L._AC_UF1000,1000_QL80_.jpg",
          },
          {
            id: "10",
            name: "Broccoli",
            description:
              "Nutritious broccoli florets, rich in vitamins and minerals.",
            price: 50,
            category: "cruciferous",
            image: "https://media.istockphoto.com/id/1364035705/photo/fresh-broccoli-on-white-background.jpg?s=612x612&w=0&k=20&c=fEcEq65rKBmT8PltpAyg_-na0WomTJ6S6m04uXQQtJs=",
          },
          {
            id: "11",
            name: "Eggplant",
            description:
              "Purple eggplants with a meaty texture, great for curries.",
            price: 40,
            category: "fruits",
            image: "https://media.istockphoto.com/id/510515443/photo/eggplant-isolated-on-white.jpg?s=612x612&w=0&k=20&c=AfRLY-0SanZ7Xo1Vdgpdv--PmAbKOdPUiLtvw4X8YJY=",
          },
          {
            id: "12",
            name: "Lettuce",
            description:
              "Crisp lettuce leaves, perfect for salads and sandwiches.",
            price: 30,
            category: "leafy",
            image: "https://media.istockphoto.com/id/535910387/photo/ripe-organic-green-salad-romano.jpg?s=612x612&w=0&k=20&c=9GTcj_WqUk9LWkzUb6g4MCnLTPAapT_hNMZCHRd3C1U=",
          },
        ];

        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    // Filter products based on search term and category
    let results = products;

    if (searchTerm) {
      results = results.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (category !== "all") {
      results = results.filter((product) => product.category === category);
    }

    setFilteredProducts(results);
  }, [searchTerm, category, products]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded my-4"
        role="alert"
      >
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      {showFilters && (
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search vegetables..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-5 w-5 text-gray-400" />
              </div>
              <select
                className="pl-10 pr-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="leafy">Leafy Vegetables</option>
                <option value="root">Root Vegetables</option>
                <option value="fruits">Fruit Vegetables</option>
                <option value="cruciferous">Cruciferous Vegetables</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {filteredProducts.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">
            No products found matching your criteria.
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setCategory("all");
            }}
            className="mt-4 text-green-500 hover:text-green-700 font-medium"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
