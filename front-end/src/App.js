//? Libraries
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//? Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";

//? Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//? Styles
import "./app.scss";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
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
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
