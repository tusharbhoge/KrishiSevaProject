import { createBrowserRouter } from "react-router-dom";
import App from "../App"; // Your main App component
import Home from "./Home";
import Dashboard from "./Dashboard";
import AddProduct from "./AddProduct";
import Help from "./Help";
import Authentication from "./Authentication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "add-product", element: <AddProduct /> },
      { path: "help", element: <Help /> },
      { path: "login", element:<Authentication/>},
    ],
  },
]);

export default router;
