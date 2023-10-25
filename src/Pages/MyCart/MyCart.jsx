import { useLoaderData } from "react-router-dom";
import Product from "./Product";
import { useState } from "react";
import OurStore from "../../components/OurStore/OurStore";

const MyCart = () => {
  const loadProducts = useLoaderData();
  const [products, setProducts] = useState(loadProducts);

  console.log(products);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 md:px-20 py-12 bg-[#010313]">
        {products?.map((product) => (
          <Product
            key={product._id}
            product={product}
            products={products}
            setProducts={setProducts}
          ></Product>
        ))}
      </div>
      <OurStore></OurStore>
    </div>
  );
};

export default MyCart;
