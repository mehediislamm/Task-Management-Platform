import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../page/Error/Error";
import Home from "../page/Home/Home/Home";
import Login from "../page/Login/Login";
import Register from "../page/register/Register";



export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement: <Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'register',
            element:<Register></Register>
        },

      ]
    },
  ]);