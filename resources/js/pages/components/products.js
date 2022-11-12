import Axios from "axios";
import React, { useEffect, useState } from "react";

function ProductForm({ product, onCancel }) {
    const defaultItem = {
        id: "",
        name: "",
        price: "",
        quantity: "",
    };
    const [item, setItem] = useState(product || defaultItem);

    const handleInputCange = (e) => {
        e.persist();
        setItem((pre) => ({
            ...pre,
            ...{ [e.target.name]: e.target.value },
        }));
    };

    const handleSave = async (id) => {
        try {
            let response;
            if (id) {
                response = await Axios.put(`/api/product/${id}`, item);
            } else {
                response = await Axios.post("/api/product", item);
            }

            console.log(response.status);

            if (response.status == 200) {
                alert("Product data saved successfully");
                onCancel && onCancel();
                setItem(defaultItem);
            } else {
                alert("Error occured while saving data.");
            }
        } catch (error) {
            alert(error);
        }
    };

    return (
        <tr>
            <th scope="row">{item.id}</th>
            <td>
                <input
                    name="name"
                    onChange={handleInputCange}
                    type="text"
                    className="form-control"
                    required
                    aria-describedby="productName"
                    placeholder="item Name"
                    value={item.name}
                />
            </td>
            <td>
                <input
                    name="price"
                    onChange={handleInputCange}
                    type="number"
                    className="form-control"
                    required
                    aria-describedby="productPrice"
                    placeholder="Price"
                    value={item.price}
                />
            </td>
            <td>
                <input
                    name="quantity"
                    onChange={handleInputCange}
                    type="number"
                    className="form-control"
                    required
                    aria-describedby="quantity"
                    placeholder="Quantity"
                    value={item.quantity}
                />
            </td>
            <td>
                {item.id ? (
                    <div className="d-flex">
                        <button
                            className="btn btn-primary"
                            onClick={() => handleSave(item.id)}
                        >
                            Update
                        </button>
                        <button
                            className="btn btn-secondary"
                            onClick={() => onCancel()}
                        >
                            Cancel
                        </button>
                    </div>
                ) : (
                    <button
                        className="btn btn-primary"
                        onClick={() => handleSave()}
                    >
                        Add
                    </button>
                )}
            </td>
        </tr>
    );
}

function Products() {
    const [editId, setEditId] = useState(null);

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const allProducts = await Axios.get("api/products");
        setProducts(allProducts.data);
    };

    const reset = () => {
        setEditId(null);
        fetchProducts();
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="card-body">
            <div className="card-header">
                <div className="d-flex align-items-center justify-content-between">
                    <h4>Products</h4>
                    {/* <button className="btn btn-primary">Add New Product</button> */}
                </div>
            </div>

            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <ProductForm onCancel={reset} />
                        {products.map((product) => {
                            if (editId == product.id) {
                                return (
                                    <ProductForm
                                        key={product.id}
                                        product={product}
                                        onCancel={reset}
                                    />
                                );
                            }

                            return (
                                <tr key={product.id}>
                                    <th scope="row">{product.id}</th>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>
                                        <div className="d-flex">
                                            <button
                                                onClick={() => {
                                                    setEditId(product.id);
                                                }}
                                                className="btn btn-link"
                                            >
                                                Edit
                                            </button>
                                            <button className="btn btn-link">
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Products;
