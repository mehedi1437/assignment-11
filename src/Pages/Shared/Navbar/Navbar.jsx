import { Link } from "react-router-dom";
import logo from "../../../assets/My project (1).png";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {

  const {user,LogOut} = useContext(AuthContext);
  console.log(user)


  const handleSignOut = () =>{
    LogOut()
    .then(result =>{
      const user = result.user;
      console.log(user)
    })
    .catch(error => console.log(error))
  }
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/all-toys">All Toys</Link>
      </li>
      <li>
        <Link to="/my-toy">My Toys</Link>
      </li>
      <li>
        <Link to="/addtoy">Add a Toy</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 h-24 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl ">
          <img className="h-12 w-12" src={logo} alt="" />
          <p className="text-3xl">Epic Fighters</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        { user ?
        <Link to='/'><button onClick={handleSignOut} className="btn btn-secondary btn-outline mt-2 mx-5">LogOut</button></Link> :
          <Link to='/login'><button className="btn btn-secondary btn-outline mt-2">Login</button></Link> 
        }
      
      

        <div className="avatar">
          <div className="w-12 rounded-full mt-3">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
