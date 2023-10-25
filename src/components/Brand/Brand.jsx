import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// Importing brand images
import nestle from "../../assets/NESTLE_BANNER_NEW_jMLY6My.png";
import Kellogg from "../../assets/Kellogg.jpg";
import Unilever from "../../assets/Unilever-office-sign.jpg";
import PepsiCo from "../../assets/PepsiCo.jpg";
import CocaCola from "../../assets/coca-cola-hd.jpg";
import KraftHeinz from "../../assets/Kraft Heinz.webp";

const Brand = () => {

  const brands = [
    { name: "Nestle", image: nestle },
    { name: "Kellogg", image: Kellogg },
    { name: "Unilever", image: Unilever },
    { name: "PepsiCo", image: PepsiCo },
    { name: "CocaCola", image: CocaCola },
    { name: "KraftHeinz", image: KraftHeinz },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);


  return (
    <div className="text-center px-5 md:px-16 space-y-14 lg:px-20 py-7 bg-[#e1d3b7] text-white">
      <div className="space-y-5">
        <h2 className="text-black text-5xl font-bold">Brand</h2>
        <p className="text-sm lg:px-60 text-black">
          Good food provides the essential nutrients the body needs. This would
          include fresh fruits and vegetables, whole grains, lean proteins, and
          healthy fats.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {brands.map((brand) => (
          <Link
            to={`/brand/${brand.name}`}
            key={brand.name}
            data-aos="fade-up"
            data-aos-anchor-placement="center-center"
            className="card shadow-xl image-full hover:opacity-90 transition-opacity"
          >
            <figure>
              <img
                
                src={brand.image}
                alt={brand.name}
              />
            </figure>
            <div className="card-body flex justify-center items-center">
              <h2 className="card-title text-white">{brand.name}!</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Brand;
