import {createBrowserRouter,} from "react-router-dom";
import MainLayOut from "./MainLayOut";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import LogIn from "../pages/Login/LogIn";
import OrderList from "../pages/OrderList/OrderList";
import Cart from "../pages/Cart/Cart";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/cart',
          element:<Cart></Cart>
        },
        {
          path:'/orderlist',
          element:<OrderList></OrderList>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/login',
          element:<LogIn></LogIn>
        },
      ]
    },
  ]);

  export default router;