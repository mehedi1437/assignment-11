/* eslint-disable react/prop-types */

const SingleToyCard = ({toy}) => {
    const {name,photo,category,price} = toy || {};
    
    return (
        <div className="">
            <div className="card  bg-base-100 shadow-xl w-full h-full ">
  <figure className="px-10 pt-10 h-full">
    <img src={photo} alt="Toy" className="rounded-xl" />
  </figure>
  <div className="card-body  text-center">
    <h2 className="card-title">Seller Name : {name}</h2>
    <p className="text-left">Price : {price}</p>
    <p className="text-left">Category : {category}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleToyCard;