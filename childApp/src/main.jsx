import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { RouterProvider, createBrowserRouter,Outlet } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/index.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/index.jsx";
import Contact from "./components/Contact/index.jsx";
import Blog from "./components/Blog/index.jsx";
import Daycare from "./components/Daycare/index.jsx";


const Layout = () => {  
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
     
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/daycare",
        element: <Daycare />,
      },
      {
        path: "/",
        element: <Home />,
      },
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") ).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);