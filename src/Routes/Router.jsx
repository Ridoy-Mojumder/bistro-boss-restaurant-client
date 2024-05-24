import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import Menu from "../Components/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Contact from "../Pages/Contact/Contact";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path:"/menu",
          element:<Menu></Menu>
        },
        {
          path:"/order",
          element:<Order/>
        },
        {
          path:"/order/:category",
          element:<Order/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
      ],
    },
  ]);