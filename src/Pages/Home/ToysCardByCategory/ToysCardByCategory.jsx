/* eslint-disable react/prop-types */

const ToysCardByCategory = ({toy}) => {
    const {name,photo,category,price} = toy || {};
    return (
        <div className="bg-[#c2e0eb] p-6 rounded-lg hover:bg-[#fcdcea] delay-75">
            <img className="w-full h-96 rounded-lg text-2xl" src={photo} alt="" />
           <div className="mt-5 ">
           
            <p className="font-bold font-sans mb-3">Sellername : {name}</p>
            <p>Category : {category}</p>
            <p className="my-3">Price : {price}</p>
            <button className="btn bg-[#f379a7] border-none hover:bg-[#4d8da5]">View details</button>
           </div>
        </div>
    );
};

export default ToysCardByCategory;