import React, { useState } from "react";
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";

const Home = () => {
    const [productToEdit, setProductToEdit] = useState(null);

    return (
        <div className="container mt-4">
            <h1 className="text-center">E-Commerce Product Management</h1>
            <ProductForm productToEdit={productToEdit} onProductSaved={() => setProductToEdit(null)} />
            <ProductList onEdit={(product) => setProductToEdit(product)} />
        </div>
    );
};

export default Home;
