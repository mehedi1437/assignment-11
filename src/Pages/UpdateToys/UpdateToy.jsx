/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateToy = () => {


    const toys = useLoaderData();
    const {_id,name,email,category,price,rating,quantity,details,photo} = toys || {};
    console.log(name)


    const handleAddToy = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const toysInfo = {name,email,photo,category,price,rating,quantity,details};
        console.log(toysInfo);


        fetch(`http://localhost:5000/all-toys/${_id}`,{
          method:'PUT',
          headers : {"content-type" : "application/json"},
          body:JSON.stringify(toysInfo)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.insetedId){
            Swal.fire({
              title: 'Success!',
              text: 'User Updated Successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
          }
        })
      }
    return (
        <div>
            <form onSubmit={handleAddToy}>
            <div className="hero  bg-base-200 ">
  <div className="hero-content  ">
    
    <div className="card    shadow-2xl bg-base-100">
    <h1 className="text-5xl font-bold text-center mt-5">Update Toy!</h1>
      <div className="card-body w-full grid lg:grid-cols-2 gap-4">
        <div className="form-control">
        
          <label className="label">
            <span className="label-text">Seller Name</span>
          </label>
          <input type="text" name='name' defaultValue={name} placeholder="Seller Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Email</span>
          </label>
          <input type="email" defaultValue={email} name="email" placeholder="Seller Email" className="input input-bordered" />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Toy Pic URL</span>
          </label>
          <input type="text" name="photo" defaultValue={photo} placeholder="Toy Pic URL" className="input input-bordered" />
         
        </div>
       

        <select className="select select-bordered w-full max-w-xs mt-10" defaultValue="Category" name="category">
              <option disabled selected>Category</option>
              <option>Marvel</option>
              <option>Avengers</option>
              <option>Star Wars</option>
        </select>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" name="price" defaultValue={price} placeholder="Price" className="input input-bordered" />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="number" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered" />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Avaliable Quantity</span>
          </label>
          <input type="number" name="quantity" defaultValue={quantity} placeholder="Avaliable quantity" className="input input-bordered" />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="textarea">Details description</span>
          </label>
          <textarea className="textarea" name="details" defaultValue={details} placeholder="Details Description"></textarea>
         
        </div>
        
      </div>
      <div className="form-control my-10 mx-10">
          <button className="btn btn-primary text-center" value='addtoy'>Add Your Toys</button>
        </div>
    </div>
  </div>
</div>
            </form>





        </div>
    );
};

export default UpdateToy;