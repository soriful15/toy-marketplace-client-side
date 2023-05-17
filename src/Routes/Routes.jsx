import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Page/Home/Home/Home";
import ErrorPage from "../LayOut/ErrorPage";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[

        {
            path: '/',
            element: <Home></Home>
        },

      ]
    },
  ]);
  export default router