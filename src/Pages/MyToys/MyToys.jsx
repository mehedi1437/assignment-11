import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

import MyToyTable from "./MyToyTable";

const MyToys = () => {

    const [toys,setToys] = useState([]);
    const [searchText,setSearchText] = useState('');

    const {user,} = useContext(AuthContext);

    useEffect(() =>{
        fetch(`http://localhost:5000/my-toys/${user?.email}`)
        .then(res => res.json())
        .then(data => setToys(data))
    },[user]);

   const handleSearch = () =>{
    fetch(`http://localhost:5000/toys-search-by-category/${searchText}`)
    .then(res => res.json())
    .then(data => {
        setToys(data)
    })
   }

    return (
        <div>
            <h1 className="text-center text-5xl my-10">ALL MY TOYS </h1>
           <div className="text-center mb-10 ">
           <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mx-4" />
            <button onClick={handleSearch} className="btn ">Search</button>
           </div>

           <div className="overflow-x-auto">
  
  {
            toys.map((toy,index) => <MyToyTable
            key={toy._id}
            toy={toy}
            index={index}
            ></MyToyTable>)
                
        
        
        
            
        }
</div>
        </div>
    );
};

export default MyToys;