import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../page/Error/Error";
import Home from "../page/Home/Home/Home";
import Login from "../page/Login/Login";
import Register from "../page/register/Register";
import Dashboard from "../hook/Dashboard";
import MyProfile from "../page/myprofile/MyProfile";



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
      {
        path:'dashboard',
        element:<Dashboard></Dashboard>,
        children:[
          {
            path:'myProfile',
            element:<MyProfile></MyProfile>
          },
          {
            path:'dashboard',
            element:<Dashboard></Dashboard>
        },
        {
            path:'/dashboard/myProfile',
            element:<MyProfile></MyProfile>
        },
        ]
    }
  ]);