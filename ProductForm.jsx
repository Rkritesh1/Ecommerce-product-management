import React, { useState } from "react";
import { addProduct } from "../api/api";
import { Form, Button, Container } from "react-bootstrap";

const ProductForm = ({ onProductAdded }) => {
    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
        stock: ""
    });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addProduct(product);
        onProductAdded();
        setProduct({ name: "", description: "", price: "", category: "", stock: "" });
    };

    return (
        <Container className="mt-4">
            <h2 className="text-center">Add Product</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Control type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" name="description" placeholder="Description" value={product.description} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Select name="category" value={product.category} onChange={handleChange} required>
                        <option value="">Select Category</option>
                        <option value="electronics">Electronics</option>
                        <option value="fashion">Fashion</option>
                        <option value="home">Home</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="number" name="stock" placeholder="Stock" value={product.stock} onChange={handleChange} required />
                </Form.Group>
                <Button variant="primary" type="submit">Add Product</Button>
            </Form>
        </Container>
    );
};

export default ProductForm;
