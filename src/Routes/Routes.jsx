import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Page/Home/Home/Home";
import ErrorPage from "../LayOut/ErrorPage";
import AllToy from "../Page/AllToy/AllToy";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../Page/MyToys/MyToys";
import AddAToys from "../Page/AddAToy/AddAToys";
import Login from '../Page/Login/Login'
import Register from "../Page/Register/Register";
import Blog from "../Page/Blog/Blog";
import SingleToy from "../Page/AllToy/SingleToy";
import CategoryDetails from "../Page/category/CategoryDetails";
import UpdatedToy from "../Page/UpdatedToy/UpdatedToy";

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
      {
        path: '/blog',
        element:<Blog></Blog>
      },
      {
        path: '/allToys',
        element:<AllToy></AllToy>
      },
      {
        path: '/myToys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: '/addToys',
        element: <PrivateRoute><AddAToys></AddAToys></PrivateRoute>
      },
      {
        path: '/singleToys/:id',
        element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
        loader: ({params})=> fetch(`https://toy-marketplace-server-sigma-two.vercel.app/allCollection/${params.id}`)
      },
      {
        path: '/categoryDetails/:id',
        element: <PrivateRoute><CategoryDetails></CategoryDetails></PrivateRoute>,
        loader: ({params})=> fetch(`https://toy-marketplace-server-sigma-two.vercel.app/allCollection/${params.id}`)
      },
      {
        path: 'updated/:id',
        element: <UpdatedToy></UpdatedToy>,
        loader: ({params})=> fetch(`https://toy-marketplace-server-sigma-two.vercel.app/allCollection/${params.id}`)
      },

    ]
  },
]);
export default router