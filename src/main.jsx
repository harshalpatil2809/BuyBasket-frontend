import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from './components/Pages/Home/Home.jsx'
import About from './components/Pages/About//About.jsx'
import Login from './components/auth/Login.jsx'
import Register from './components/auth/Register.jsx'
import Contact from './components/Pages/Contact/Contact.jsx'
import User from "./components/auth/User.jsx";
import Cart from "./components/Pages/Cart/Cart.jsx";
import Order from "./components/Pages/Order/Order.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "user", element: <User /> },
      { path: "cart", element: <Cart /> },
      { path: "order", element: <Order /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
