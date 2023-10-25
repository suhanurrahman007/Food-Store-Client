import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import Footer from "../components/Header/Footer/Footer";

const Root = () => {
    return (
      <div className="">
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
      </div>
    );
};

export default Root;