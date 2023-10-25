import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import sharp from "../../assets/sushi-chef.jpg"
import "./Experience.css"
import AOS from "aos";
import { useEffect } from "react";

const Experience = () => {
   useEffect(() => {
     AOS.init({
       duration: 1000,
     });
   }, []);

  return (
    <div className="md:flex space-y-4 px-5 md:px-16 lg:px-20 py-14">
      <div className="md:w-1/3 flex flex-col justify-center items-center space-y-5">
        <img
          data-aos="zoom-in"
          src={sharp}
          alt="Profile picture of Barry Allen"
          className=""
        />
        <h1 className="text-2xl font-bold mb-2">BARRY ALLEN</h1>
        <p className="text-gray-600 mb-4">MASTER CHEF</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
            <BsFacebook></BsFacebook>
          </button>
          <button className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 focus:outline-none focus:bg-pink-600">
            <BsInstagram></BsInstagram>
          </button>
          <button className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            <BsTwitter></BsTwitter>
          </button>
        </div>
      </div>

      <div className="md:w-2/3 ml-0 md:ml-7">
        <h1 className="text-4xl font-semibold mb-4 text-gray-800">
          DELICIOUS RECIPE INSPIRED BY THE MASTER OF AMERICAN CHEF
        </h1>
        <p className="text-gray-600 mb-4">
          Boasting a rich culinary journey spanning 15 years, BARRY ALLEN has
          honed his craft to perfection, solidifying his status as a master
          chef. His extensive experience, coupled with a passion for flavors and
          innovative techniques, showcases a legacy of culinary excellence.
        </p>
        <p className="text-sm text-gray-500 mb-7 italic">
          Replace BARRY ALLEN with the name or leave it as-is for a general
          statement. Adjust the gender pronouns as needed.
        </p>

        <div className="space-y-5">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className="progress-container w-full"
          >
            <div
              className="progress-bar progress-warning"
              style={{ width: "85%" }}
            >
              <span className="text-xs text-white">Creativity: 85%</span>
            </div>
          </div>

          <div className="progress-container w-full">
            <div
              className="progress-bar progress-warning"
              style={{ width: "80%" }}
            >
              <span className="text-xs text-white">Food Preparation: 80%</span>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className="progress-container w-full"
          >
            <div
              className="progress-bar progress-warning"
              style={{ width: "70%" }}
            >
              <span className="text-xs text-white">
                Knowledge of Nutrition: 70%
              </span>
            </div>
          </div>

          <div className="progress-container w-full">
            <div
              className="progress-bar progress-warning"
              style={{ width: "90%" }}
            >
              <span className="text-xs text-white">
                Knowledge of Nutrition: 90%
              </span>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className="progress-container w-full"
          >
            <div
              className="progress-bar progress-warning"
              style={{ width: "78%" }}
            >
              <span className="text-xs text-white">Time Management: 78%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
