import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AddCart from "../Pages/AddCart/AddCart";
import MyCart from "../Pages/MyCart/MyCart";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import UpdateProduct from "../Pages/MyCart/UpdateProduct";
import BrandProducts from "../components/Brand/BrandProducts";
import BrandProductDetails from "../components/Brand/BrandProductDetails";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivetRouter from "./PrivetRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: (
          <PrivetRouter>
            <AddCart></AddCart>
          </PrivetRouter>
        ),
      },
      {
        path: "/myCart",
        element: (
          <PrivetRouter>
            <MyCart></MyCart>
          </PrivetRouter>
        ),
        loader: () => fetch("https://food-server-3xcp7p4qu-suhans-projects.vercel.app/product"),
      },
      {
        path: "/updateProduct/:id",
        element: (
          <PrivetRouter>
            <UpdateProduct></UpdateProduct>
          </PrivetRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://food-server-3xcp7p4qu-suhans-projects.vercel.app/product/${params.id}`),
      },
      {
        path: "/brand/:brandName",
        element: (
          <PrivetRouter>
            <BrandProducts></BrandProducts>
          </PrivetRouter>
        ),
        loader: () => fetch("https://food-server-3xcp7p4qu-suhans-projects.vercel.app/product"),
      },

      {
        path: "/details/:id",
        element: (
          <PrivetRouter>
            <BrandProductDetails></BrandProductDetails>
          </PrivetRouter>
        ),
        loader: () => fetch("https://food-server-3xcp7p4qu-suhans-projects.vercel.app/product"),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

export default router;
