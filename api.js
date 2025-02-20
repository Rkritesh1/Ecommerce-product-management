import axios from "axios";

const API_URL = "http://localhost:5000/api/products"; // Backend API URL

// Fetch products with optional search & filters
export const fetchProducts = async (search, category, minPrice, maxPrice) => {
    try {
        const params = { search, category, minPrice, maxPrice };
        const response = await axios.get(API_URL, { params });
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};

// Add a new product
export const addProduct = async (productData) => {
    try {
        const response = await axios.post(API_URL, productData);
        return response.data;
    } catch (error) {
        console.error("Error adding product:", error);
        throw error;
    }
};

// Delete a product
export const deleteProduct = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error("Error deleting product:", error);
    }
};
