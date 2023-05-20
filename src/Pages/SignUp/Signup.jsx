import { Link } from "react-router-dom";
import img from '../../assets/login.png.png'
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
const Signup = () => {


    const {createUser} = useContext(AuthContext)

    const handleSignup = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name,email,photo,password);


        createUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            console.log(error)
        })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row ">
          <div className=" w-1/2">
           <img src={img} alt="" />
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className="text-5xl font-bold text-center">Sign Up !</h1>
               <form onSubmit={handleSignup}>
               <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
              </div>
               <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" />
              </div>
               <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6" >
                <input className='btn btn-primary' type="submit" value="SignUp" />
              </div>
               </form>
               <p className='mt-4 text-center'>Already Have an Account ? <Link to='/login' className='text-blue-700 font-bold'>Log In</Link></p>
            </div>
          </div>
        </div>
              </div>
    );
};

export default Signup;