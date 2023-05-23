import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const viewDetails = useLoaderData();
    const {name,email,photo,category,price,rating,quantity,details}=viewDetails || {};
    return (
        <div className="max-w-lg mx-auto bg-red-200 hover:bg-green-200 my-10 p-10 rounded-lg">
            <div className=" mx-auto">
            <img className="h-60 w-60 rounded-lg" src={photo} alt="" />
            </div>
            <div className="text-xl my-12 ">
            <p>SellerName : {name}</p>
            <p>Email : {email}</p>
            <p> Category : {category}</p>
            <p>Price : {price}</p>
            <p>RAting : {rating}</p>
            <p>Quantity : {quantity}</p>
            <p> Details : {details}</p>
            </div>
        </div>
    );
};

export default ViewDetails;