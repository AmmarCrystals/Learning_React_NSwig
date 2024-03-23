import HeaderComponent from "../src/components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import ResturantMenue from "./components/ResturantMenue";
import Instamart from "./components/Instamart"
const Applayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <Footer />
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/resturant/:id",
        element: <ResturantMenue />,
      },
      {
        path: "/Instamart",
        element: <Instamart />,
      },
    ],
  },
]);

export default Applayout;
