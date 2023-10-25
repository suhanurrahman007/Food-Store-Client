import Brand from "../../components/Brand/Brand";
import Experience from "../../components/Experience/Experience";
import Slider from "../../components/Header/Slider/Slider";
import OurStore from "../../components/OurStore/OurStore";
import Reservation from "../../components/Reservation/Reservation";

const Home = () => {
  return (
    <div>
      {/* <hr className="border-gray-700" /> */}
      <Slider></Slider>
      <Brand></Brand>
      <Reservation></Reservation>
      <Experience></Experience>
      <OurStore></OurStore>
      <hr className="border-gray-700" />
    </div>
  );
};

export default Home;
