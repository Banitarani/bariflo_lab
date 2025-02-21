/* eslint-disable no-unused-vars */
import "./App.css";
import Home from "./pages/Home";
import Layout from "./layout/layout";
import Error404page from "./pages/Error404page";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Products from "./pages/Product";
import Orders from "./pages/Orders";
import Users from "./pages/Users";
import Allcategories from "./pages/Allcategories";
import Addcategories from "./pages/Addcategories";
import PurchaseOrder from "./pages/PurchaseOrder";
import SalesOrder from "./pages/SalesOrder";
import ManageSupplier from "./pages/ManageSupplier";
import CreateSupplier from "./pages/CreateSupplier";
import CreateCustomer from "./pages/CreateCustomer";
import ManageCustomers from "./pages/ManageCustomers";
import Inventory from "./pages/Inventory";
import Warehouse from "./pages/Warehouse";
import RetailSales from "./pages/RetailSales";

const sidebarItems = [
  { name: "Home", link: "/home", icon: "home" },
  { name: "Products", link: "/products", icon: "Redeem" },
  {
    name: "Categories",
    link: "categories",
    icon: "Category",
    children: [
      { name: "All categories", link: "/allcategories" },
      { name: "Add category", link: "/addcategories" },
    ], 
  },
  { name: "Orders", link: "/orders" ,icon:"Store",
    
    children:[
      {name: "Purchase Order",link:"/PurchaseOrders"},
      {name : "Sales Order",link:"/SalesOrders"},],
  },
  { name: "Users", link: "/users"},
  {name : "Customer",link :"/customers",icon:"Receipt",
    children:[
      {name : "Manage Customer", link:"/ManageCustomers"},
      {name : "Create Customer", link:"/CreateCustomers"},
    ],
  },
  {name: "Supplier",link:"/suppliers",icon:"Add",
    children:[
      {name : "Manage Supplier",link:"/ManageSuppliers"},
      {name : "Create Supplier",link: "/CreateSuppliers"},
    ]
  },
  {name : "Retail Sales",link:"/RetailSales",icon:"Retail"},
  {name : "Inventory",link:"/inventories",icon:"Inventory"},
  {name : "Warehouse",link: "/Warehouses",icon:"Warehouse"},
  { name: "Settings", link: "/settings", icon: "settings" },
];// here add sidebar component 

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
      {path : "allcategories" , element : <Allcategories />},
      {path : "addcategories" ,element : <Addcategories />},
      {path: "PurchaseOrders",element: <PurchaseOrder />},
      {path: "SalesOrders",element:<SalesOrder />},
      {path : "ManageSuppliers" , element : <ManageSupplier/>},
      {path : "CreateSuppliers" , element : <CreateSupplier/>},
      {path : "CreateCustomers", element : <CreateCustomer/>},
      {path : "ManageCustomers" , element: <ManageCustomers />},
      {path :"Inventories", element : <Inventory/>},
      {path : "Warehouses" , element : <Warehouse/>},
      {path: "RetailSales" , element: <RetailSales />},
    ],
  },
  // { path: "/create/po", element: <CreatePurchaseOrder /> },
  { path: "*", element: <Error404page /> },
]);// here we route paths for routing pages .

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </>//toastcontainer are small ,non -interface msg that pop up on the screen to give feedback to user such as "success" or "error";
  );
}

export default App;