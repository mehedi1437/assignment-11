import { useEffect, useState } from "react";
import "../../../index.css";
import ToysCardByCategory from "../ToysCardByCategory/ToysCardByCategory";
const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActivetab] = useState("Marvel");
  const handleTabClick = (tabName) => {
    setActivetab(tabName);
  };

  useEffect(() => {
    fetch(`https://toy-project-server-2yh3wx1zb-mehedi1437.vercel.app/all-toys/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [activeTab]);
  return (
    <div>
      <h1 className="custom-font text-5xl text-center my-20">Shop Now Our Products </h1>

      {/* Tab */}
      <div className="tabs w-full justify-center my-12 ">
        <a
          onClick={() => handleTabClick("Marvel")}
          className={`tab tab-lg 
                ${activeTab == "Marvel" ? "bg-[#f379a7] slate-500 text-white " : ""} `}
        >
          Marvel
        </a>
        <a
          onClick={() => handleTabClick("Avengers")}
          className={`tab tab-lg 
                ${activeTab == "Avengers" ? "bg-[#f379a7] slate-500 text-white " : ""} `}
        >
          Avengers
        </a>
        <a
          onClick={() => handleTabClick("Star Wars")}
          className={`tab tab-lg 
                ${activeTab == "Star Wars" ? "bg-[#f379a7] text-white " : ""} `}
        >
          Star Wars
        </a>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {toys.map((toy) => (
          <ToysCardByCategory key={toy._id} toy={toy}></ToysCardByCategory>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
