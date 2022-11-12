import React, { useState } from "react";
import ReactDOM from "react-dom";
import Categories from "./components/category";
import Products from "./components/products";

function Index() {
    const [activeTab, setActiveTab] = useState("product");

    const toggleTab = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card">
                        <div className="card-header">
                            <div className="btn-group btn-group">
                                <button
                                    onClick={() => toggleTab("product")}
                                    className={`btn btn-primary ${
                                        activeTab == "product" ? "active" : ""
                                    }`}
                                >
                                    Products
                                </button>
                                <button
                                    onClick={() => toggleTab("category")}
                                    className={`btn btn-primary ${
                                        activeTab == "category" ? "active" : ""
                                    }`}
                                >
                                    Category
                                </button>
                            </div>
                        </div>

                        {activeTab == "product" ? <Products /> : <Categories />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;

if (document.getElementById("app")) {
    ReactDOM.render(<Index />, document.getElementById("app"));
}
