import Banner from "../../Banner/Banner";
import Colleges from "../../Colleges/Colleges";
import Gallery from "../../Gallery/Gallery";


const Home = () => {
    return (
        <div className="pt-16">
            <Banner/>
            <Colleges/>
            <Gallery/>
            
        </div>
    );
};

export default Home;