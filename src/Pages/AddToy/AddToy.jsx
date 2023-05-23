import Swal from "sweetalert2";
import useTitle from "../../TitleHook/useTitle";

const AddToy = () => {

  useTitle('Add a Toy')
  const handleAddToy = (event) => {
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
    const toysInfo = { name, email, photo, category, price, rating, quantity, details };
    console.log(toysInfo);

    fetch(`https://toy-project-server-2yh3wx1zb-mehedi1437.vercel.app/post-toy`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(toysInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
            Swal.fire({
              icon: 'success',
              text: 'toy added succesfully',  
            })
          
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleAddToy}>
        <div className="hero  bg-base-200 ">
          <div className="hero-content  ">
            <div className="card    shadow-2xl bg-base-100">
              <h1 className="text-5xl font-bold text-center mt-5">Add a Toy!</h1>
              <div className="card-body w-full grid lg:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Seller Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Seller Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Seller Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Seller Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Toy Pic URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Toy Pic URL"
                    className="input input-bordered"
                  />
                </div>

                <select
                  className="select select-bordered w-full max-w-xs mt-10"
                  defaultValue="Category"
                  name="category"
                >
                  <option disabled selected>
                    Category
                  </option>
                  <option>Marvel</option>
                  <option>Avengers</option>
                  <option>Star Wars</option>
                </select>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                    type="number"
                    name="rating"
                    placeholder="Rating"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Avaliable Quantity</span>
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    placeholder="Avaliable quantity"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="textarea">Details description</span>
                  </label>
                  <textarea
                    className="textarea"
                    name="details"
                    placeholder="Details Description"
                  ></textarea>
                </div>
              </div>
              <div className="form-control my-10 mx-10">
                <button className="btn btn-primary text-center" value="addtoy">
                  Add Your Toys
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
