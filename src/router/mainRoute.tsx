import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/layout/Layout";
import HomeScreen from "../pages/HomeScreen";
import Verify from "../pages/Verify";
import VerifyCode from "../pages/VerifyCode";
import Register from "../pages/Register";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: (
        <Layout />
    ),
    children: [{ index: true, element: <HomeScreen /> },

],
  },
  {
    path: "/Register",
    element: <Register/>
  },
  {
    path:"/VerifyCode",
    element:<VerifyCode/>
  },
  {
    path:"/Verify",
    element:<Verify/>
  }
  
]);
