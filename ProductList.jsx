import React, { useState, useEffect } from "react";
import { fetchProducts, deleteProduct } from "../api/api";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    useEffect(() => {
        const loadProducts = async () => {
            const data = await fetchProducts(search, category, minPrice, maxPrice);
            setProducts(data);
        };
        loadProducts();
    }, [search, category, minPrice, maxPrice]);

    const handleDelete = async (id) => {
        await deleteProduct(id);
        setProducts(products.filter(product => product._id !== id));
    };

    return (
        <Container className="mt-4">
            <h2 className="text-center">Product List</h2>

            {/* Filters */}
            <Form className="mb-4">
                <Row className="g-2">
                    <Col md>
                        <Form.Control 
                            type="text" 
                            placeholder="Search by name..." 
                            value={search} 
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </Col>
                    <Col md>
                        <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="">All Categories</option>
                            <option value="electronics">Electronics</option>
                            <option value="fashion">Fashion</option>
                            <option value="home">Home</option>
                        </Form.Select>
                    </Col>
                    <Col md>
                        <Form.Control 
                            type="number" 
                            placeholder="Min Price" 
                            value={minPrice} 
                            onChange={(e) => setMinPrice(e.target.value)}
                        />
                    </Col>
                    <Col md>
                        <Form.Control 
                            type="number" 
                            placeholder="Max Price" 
                            value={maxPrice} 
                            onChange={(e) => setMaxPrice(e.target.value)}
                        />
                    </Col>
                </Row>
            </Form>

            {/* Product Grid */}
            <Row>
                {products.map(product => (
                    <Col key={product._id} md={4} className="mb-4">
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <Card.Text><strong>Price:</strong> ${product.price}</Card.Text>
                                <Card.Text><strong>Category:</strong> {product.category}</Card.Text>
                                <Card.Text><strong>Stock:</strong> {product.stock}</Card.Text>
                                <Button variant="danger" onClick={() => handleDelete(product._id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductList;
