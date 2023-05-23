
import { useLoaderData } from "react-router-dom";
import SingleToyCard from "../SingleToyCard/SingleToyCard";
import useTitle from "../../TitleHook/useTitle";

const AllToys = () => {
    useTitle("All Toys")
    const loadAllToys = useLoaderData();
    // const [allToys,setAllToys] = useState(loadAllToys);
    
console.log(loadAllToys)
    return (
        <div>
            <h2 className="text-center text-3xl">All Toys</h2>
            
            <div className="grid lg:grid-cols-3 gap-5 ">
            {
               loadAllToys.map(toy => <SingleToyCard
               key={toy._id}
               toy={toy}
               ></SingleToyCard>) 
            }
            </div>
        </div>
    );
};

export default AllToys;