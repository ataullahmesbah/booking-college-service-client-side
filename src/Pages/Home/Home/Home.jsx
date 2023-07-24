import Banner from "../../Banner/Banner";
import Colleges from "../../Colleges/Colleges";
import Gallery from "../../Gallery/Gallery";
import ResearchPapers from "../../ResearchPapers/ResearchPapers";
import ReviewState from "../../ReviewState/ReviewState";


const Home = () => {
    return (
        <div className="pt-16">
            <Banner />
            <Colleges />
            <Gallery />
            <ResearchPapers />
            <ReviewState />

        </div>
    );
};

export default Home;