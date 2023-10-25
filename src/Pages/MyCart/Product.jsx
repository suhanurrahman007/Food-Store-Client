import { FaEdit } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";

const Product = ({ product, products, setProducts }) => {
    // console.log(products, setProducts);
  const { _id, name, rating, productImageURL, detailedDescription } = product;

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://food-server-3xcp7p4qu-suhans-projects.vercel.app/product/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "The selected item has been successfully Deleted.",
                "success"
              );

              const remaining  = products.filter(product => product._id !== id)
              setProducts(remaining)
            }
          });
      }
    });
  };

  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="card card-compact bg-[#150f2d] text-white rounded-md shadow-xl"
      >
        <figure>
          <img
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="w-full h-40"
            src={productImageURL}
            alt={"Product Image"}
          />
        </figure>
        <div className="card-body h-56">
          <h2 className="card-title">{name}</h2>

          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-xl ${
                  rating > i ? "text-yellow-500" : "text-gray-300"
                }`}
              >
                ☆
              </span>
            ))}
          </div>

          <p>{detailedDescription}</p>

          <div className=" flex justify-center items-center mt-4 space-x-3">
            <Link
              to={`/updateProduct/${_id}`}
              className="btn w-1/2 border-none  text-white text-xs hover:bg-[#13341a] bg-[#1e4427]"
            >
              <FaEdit /> Update
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn w-1/2 border-none  text-white text-xs hover:bg-[#511b1b] bg-[#7d2530]"
            >
              <AiOutlineClose /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
