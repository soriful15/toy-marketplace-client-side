import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Page/Home/Home/Home";
import ErrorPage from "../LayOut/ErrorPage";
// import AllToy from "../Page/AllToy/AllToy";
// import PrivateRoute from "./PrivateRoute";
// import MyToys from "../Page/MyToys/MyToys";
// import AddAToys from "../Page/AddAToy/AddAToys";
// import SingleToy from "../Page/SingleToy/SingleToy";
import Login from '../Page/Login/Login'
import Register from "../Page/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [

      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      // {
      //   path: '/allToys',
      //   element: <PrivateRoute><AllToy></AllToy></PrivateRoute>
      // },
      // {
      //   path: '/myToys',
      //   element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      // },
      // {
      //   path: '/addToys',
      //   element: <PrivateRoute><AddAToys></AddAToys></PrivateRoute>
      // },
      // {
      //   path: '/singleToys',
      //   element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>
      // },

    ]
  },
]);
export default router