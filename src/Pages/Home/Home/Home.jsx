import AboutUs from "../../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import PlayingPage from "../PlayingPage/PlayingPage";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
    return (
        <div >
            <Banner/>
            <Gallery/>
            <ShopByCategory/>
            <AboutUs/>
            <PlayingPage/>
            
           
        </div>
    );
};

export default Home;