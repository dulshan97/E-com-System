import React from "react";

function Categories() {
    const categories = [
        {
            id: 1,
            paret_id: null,
            name: "Category 1",
        },
        {
            id: 2,
            paret_id: null,
            name: "Category 2",
        },
    ];

    return (
        <div className="card-body">
            <div className="card-header">
                <div className="d-flex align-items-center justify-content-between">
                    <h4>Categories</h4>
                    <button className="btn btn-primary">
                        Add New category
                    </button>
                </div>
            </div>

            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Category Name</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((cat) => {
                            return (
                                <tr key={cat.id}>
                                    <th scope="row">{cat.id}</th>
                                    <td>{cat.name}</td>
                                    <td>edit | delete </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Categories;
