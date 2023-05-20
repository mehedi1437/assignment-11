import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToy from "../Pages/UpdateToys/UpdateToy";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/addtoy',
                element:<AddToy></AddToy>
            },
            {
                path:'/all-toys',
                element:<AllToys></AllToys>,
                loader:() => fetch('http://localhost:5000/all-toys')
            },
            {
                path:'/my-toy',
                element:<MyToys></MyToys>,
            },{
                path:'/update-toy/:id',
                element:<UpdateToy></UpdateToy>,
                loader: ({params}) => fetch(`http://localhost:5000/all-toys/${params.id}`)
            }
        ]
    }
]);

export default router;