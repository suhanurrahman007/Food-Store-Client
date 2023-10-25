import { useTheme } from "../../../ThemeProvider/ThemeProvider";
import banner from "../../../assets/banner.jpg";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import AOS from "aos";
import { useEffect } from "react";

const Slider = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const buttonStyles =
    theme === "light"
      ? "bg-black text-[#c5a35e] hover:bg-white hover:text-black"
      : "bg-white text-black hover:bg-black hover:text-[#c5a35e]";

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div className="lg:flex py-7 items-center px-5 md:px-16 pt-7 ">
      <div
        // data-aos="fade-down"
        // data-aos-easing="linear"
        // data-aos-duration="1500"
        className="lg:w-2/3 mb-7 text-center lg:text-left space-y-5  items-center"
      >
        <h1
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-5xl font-extrabold"
        >
          GOOD FOOD MAKE <br />
          <span data-aos="flip-down" className="text-[#c5a35e]">
            FRESH MIND
          </span>
        </h1>
        <p
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="md:w-3/4 text-gray-500"
        >
          Rustle up an easy veggie traybake for a quick midweek dinner, perfect
          for feeding the family with minimal washing up.
        </p>
        <div data-aos="fade-up" data-aos-duration="3000">
          <button
            className={`btn rounded-none font-normal border-none text-xs ${buttonStyles}`}
            onClick={toggleTheme}
          >
            {theme === "light" ? (
              <span className="text-3xl font-bold">
                <MdDarkMode></MdDarkMode>
              </span>
            ) : (
              <span className="text-3xl font-bold">
                <MdLightMode></MdLightMode>
              </span>
            )}{" "}
            {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </div>
      </div>

      <div
        className="flex md:justify-center lg:justify-start"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <img className="rounded-full w-full md:w-96" src={banner} alt="" />
      </div>
    </div>
  );
};

export default Slider;
