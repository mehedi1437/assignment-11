import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToy from "../Pages/UpdateToys/UpdateToy";
import ViewDetails from "../Pages/Home/ToysCardByCategory/ViewDetails";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivetRoutes from "./PrivetRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/addtoy",
        element: (
          <PrivetRoutes>
            <AddToy></AddToy>
          </PrivetRoutes>
        ),
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>,
        loader: () =>
          fetch("https://toy-project-server-2yh3wx1zb-mehedi1437.vercel.app/all-toys"),
      },
      {
        path: "/my-toy",
        element: (
          <PrivetRoutes>
            {" "}
            <MyToys></MyToys>
          </PrivetRoutes>
        ),
      },

      {
        path: "/update-toy/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(
            `https://toy-project-server-2yh3wx1zb-mehedi1437.vercel.app/toy-details-by-id/${params.id}`
          ),
      },
      {
        path: "/view-details/:id",
        element: (
          <PrivetRoutes>
            <ViewDetails></ViewDetails>
          </PrivetRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-project-server-2yh3wx1zb-mehedi1437.vercel.app/toy-details-by-id/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
