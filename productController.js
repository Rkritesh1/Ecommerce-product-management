import Product from "../models/Product.js";

// Create a new product
export const createProduct = async (req, res) => {
    try {
        const { name, description, price, category, stock } = req.body;
        const newProduct = new Product({ name, description, price, category, stock });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all products with search & filters
export const getProducts = async (req, res) => {
    try {
        const { search, category, minPrice, maxPrice } = req.query;
        let filter = {};

        // Search by product name (case insensitive)
        if (search) {
            filter.name = { $regex: search, $options: "i" };
        }

        // Filter by category
        if (category) {
            filter.category = category;
        }

        // Filter by price range
        if (minPrice || maxPrice) {
            filter.price = {};
            if (minPrice) filter.price.$gte = Number(minPrice);
            if (maxPrice) filter.price.$lte = Number(maxPrice);
        }

        const products = await Product.find(filter);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a product
export const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) return res.status(404).json({ message: "Product not found" });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a product
export const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) return res.status(404).json({ message: "Product not found" });
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
