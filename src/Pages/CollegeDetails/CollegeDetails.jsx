import { useParams } from "react-router-dom";
import useColleges from "../../hooks/useColleges";
import CollegeDetailsInfo from "./CollegeDetailsInfo";
import Container from "../Shared/Container";


const CollegeDetails = () => {
    const { id } = useParams();
    const [colleges] = useColleges();

    // Find the specific college details based on the id
    const collegeDetails = colleges.find((college) => college._id === id);



    return (
        <Container>
            <div className="pt-20">

                <h3 className="font-bold text-xl md:text-2xl lg:text-5xl text-blue-950 m-16 text-center">Choose Your College and Get Full Information Details</h3>
                <div className="">
                {collegeDetails ? (
                    <CollegeDetailsInfo collegeInfo={collegeDetails} />
                ) : (
                    <p>College details not found.</p>
                )}
                </div>
            </div>
        </Container>
    );
};

export default CollegeDetails;