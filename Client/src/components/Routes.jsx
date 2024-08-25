import { createBrowserRouter } from "react-router-dom";
import App from "../App"; // Your main App component
import Home from "./Home";
import Dashboard from "./Dashboard";
import AddProduct1 from "./AddProduct/AddProduct1";
import Help from "./Help";
import Authentication from "./Authentication";
import AddProduct2 from "./AddProduct/AddProduct2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "add-product", element: <AddProduct1 /> },
      { path: "help", element: <Help /> },
      { path: "login", element:<Authentication/>},
      { path: "/plans",element:<AddProduct2/>}
    ],
  },
]);

export default router;
