import { createBrowserRouter } from "react-router-dom";
import App from "../App"; // Your main App component
import Home from "./Home";
import Dashboard from "./Dashboard";
import AddProduct1 from "./AddProduct/AddProduct1";
import Help from "./Help";
import Authentication1 from "./Authentication/Authentication1";
import AddProduct2 from "./AddProduct/AddProduct2";
import Authentication2 from "./Authentication/Authentication2";
import AddProduct3 from "./AddProduct/AddProduct3";

const isLogin=true
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "dashboard", element: isLogin?<Dashboard />:<Authentication1/>},
      { path: "add-product", element:isLogin?<AddProduct1 />:<Authentication1/> },
      { path: "help", element:isLogin? <Help />:<Authentication1/> },
      { path: "login", element:<Authentication1/>},
      { path: "/plans",element:<AddProduct2/>},
      { path: "signup", element:<Authentication2/>},
      { path: "/addImage", element:<AddProduct3/>},
      { path: "bookNow",  element: isLogin?<Dashboard/>:<Authentication1/>},


    ],
  },
]);

export default router;
