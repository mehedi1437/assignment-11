import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Gallery/>
            <ShopByCategory/>
            
            <h2>This is home</h2>
        </div>
    );
};

export default Home;