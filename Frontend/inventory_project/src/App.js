/* eslint-disable no-unused-vars */
import "./App.css";
import Home from "./pages/Home";
import Layout from "./layout/layout";
import Error404page from "./pages/Error404page";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import CreatePurchaseOrder from "./pages/PurchaseOrder/CreatePurchaseOrder";
// import ProtectedRoute from "./utils/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Products from "./pages/Product";
import Orders from "./pages/Orders";
import Users from "./pages/Users";

const sidebarItems = [
  { name: "Home", link: "/home", icon: "home" },
  { name: "Products", link: "/products", icon: "products" },
  {
    name: "Categories",
    icon: "categories",
    children: [
      { name: "All categories", link: "/categories" },
      { name: "Add category", link: "/categories/add" },
    ],
  },
  { name: "Orders", link: "/orders", icon: "orders" },
  { name: "Users", link: "/users", icon: "users" },
  { name: "Settings", link: "/settings", icon: "settings" },
];

// const isAuthenticated = true; // Set this to control access

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout sidebarList={sidebarItems} />,
    children: [
      { path: "home", element: <Home /> },
      { path: "Products", element: <Products /> },
      { path: "Orders", element: <Orders /> },
      {path : "Users" , element: <Users/>},
    ],
  },
  // { path: "/create/po", element: <CreatePurchaseOrder /> },
  { path: "*", element: <Error404page /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </>
  );
}

export default App;