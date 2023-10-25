import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const product = useLoaderData();
  const {
    _id,
    name,
    brandName,
    productType,
    price,
    rating,
    productImageURL,
  } = product;

  const [selectedRating, setSelectedRating] = useState(rating);

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.productName.value;
    const brandName = form.brandName.value;
    const productType = form.productType.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const productImageURL = form.productImageURL.value;

    const UpdateProduct = {
      name,
      brandName,
      productType,
      price,
      rating,
      productImageURL,
    };

    console.log(UpdateProduct);

    fetch(`https://food-server-3xcp7p4qu-suhans-projects.vercel.app/product/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Wow....!",
            text: "The Product details have been updated successfully.!",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Opps....!",
            text: "Please update the Product details.!",
          });
        }
      });
  };
  return (
    <div className="p-5 md:px-16 bg-[#151620]">
      <form onSubmit={handleUpdateProduct} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Name</span>
            </label>
            <input
              type="text"
              defaultValue={name}
              name="productName"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">
                The Types Of Products
              </span>
            </label>
            <input
              type="text"
              defaultValue={productType}
              name="productType"
              placeholder="Product Type"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Brand Name</span>
            </label>
            <select
              className="input input-bordered"
              defaultValue={brandName}
              name="brandName"
              required
            >
              <option value="Nestle">Nestle</option>
              <option value="Kellogg">Kellogg</option>
              <option value="Unilever">Unilever</option>
              <option value="PepsiCo">PepsiCo</option>
              <option value="CocaCola">Coca Cola</option>
              <option value="KraftHeinz">Kraft Heinz</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Price</span>
            </label>
            <input
              type="number"
              defaultValue={price}
              name="price"
              placeholder="Price"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control ">
            <label className="label">
              <span className="label-text text-white">Rating</span>
            </label>
            <div className="rating flex">
              {[1, 2, 3, 4, 5].map((ratingValue) => (
                <React.Fragment key={ratingValue}>
                  <input
                    id={`rating-${ratingValue}`}
                    type="radio"
                    // defaultValue={rating}
                    name="rating"
                    value={ratingValue}
                    className="sr-only"
                    checked={selectedRating === ratingValue}
                    onChange={() => setSelectedRating(ratingValue)}
                  />
                  <label
                    htmlFor={`rating-${ratingValue}`}
                    className={`star-label text-2xl cursor-pointer ${
                      selectedRating >= ratingValue
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  >
                    ☆
                  </label>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Image URL</span>
            </label>
            <input
              type="url"
              defaultValue={productImageURL}
              name="productImageURL"
              placeholder="https://example.com/image.jpg"
              className="input input-bordered"
              pattern="https://.*" // Optional: To ensure it starts with 'https://'
            />
          </div>
        </div>

        <div className="form-control mt-6 space-y-5">
          
          <button type="submit" className="btn btn-primary">
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
