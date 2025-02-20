import React from "react";

const ProductCard = ({ product, onDelete, onEdit }) => {
    return (
        <div className="col-md-4 mb-3">
            <div className="card p-3 shadow-sm">
                <h5>{product.name}</h5>
                <p>{product.description}</p>
                <p><strong>Price:</strong> ${product.price}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <button className="btn btn-primary me-2" onClick={() => onEdit(product)}>Edit</button>
                <button className="btn btn-danger" onClick={() => onDelete(product._id)}>Delete</button>
            </div>
        </div>
    );
};

export default ProductCard;
