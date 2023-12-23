import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../page/Error/Error";
import Home from "../page/Home/Home/Home";
import Login from "../page/Login/Login";
import Register from "../page/register/Register";
import Dashboard from "../hook/Dashboard";
import MyProfile from "../page/myprofile/MyProfile";
import AddedTask from "../page/AddedTask/AddedTask";
import TodoList from "../page/TodoList/TodoList";
import DeleteTask from "../page/DeleteTask/DeleteTask";
import About from "../page/About/About";



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
            path:'about',
            element:<About></About>
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
        {
            path:'/dashboard/addedtask',
            element:<AddedTask></AddedTask>
        },
        {
            path:'/dashboard/todolist',
            element:<TodoList></TodoList>
        },
        {
            path:'/dashboard/deletetask',
            element:<DeleteTask></DeleteTask>
        },
        ]
    }
  ]);