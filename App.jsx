import React, { useState } from "react";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import { Container } from "react-bootstrap";

const App = () => {
    const [refresh, setRefresh] = useState(false);

    return (
        <Container className="mt-4">
            <h1 className="text-center">E-Commerce Product Management</h1>
            <ProductForm onProductAdded={() => setRefresh(!refresh)} />
            <ProductList key={refresh} />
        </Container>
    );
};

export default App;
