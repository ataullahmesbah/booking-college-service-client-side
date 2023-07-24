import { Link } from "react-router-dom";
import Container from "../Shared/Container";

const AllCollege = ({ allCollege }) => {
    const { _id, img, college_name, admission_dates, rating, number_of_research, } = allCollege;

    return (
        <Container>
            <div className="flex card h-full w-full md:w-full lg:w-96 bg-base-100 shadow-xl mx-auto my-4">
                <figure>
                    <img className="h-64" src={img} alt="" />
                </figure>

                <div className="flex flex-col card-body space-y-5 p-4">

                    <h2 className="card-title font-serif text-xl md:text-2xl">{college_name}</h2>
                    <div className="space-y-3 flex-grow">
                        <p className="text-sm md:text-base"><span className=" font-semibold">Admission Date: </span> {admission_dates}</p>

                        <p className="text-sm md:text-base"><span className=" font-semibold">Number of Research:</span>  {number_of_research}</p>
                        <p className="text-sm md:text-base"><span className=" font-semibold">Rating:</span> {rating}</p>
                    </div>

                    
                    <Link to={`/infocolleges/${_id}`}>
                        <button className="btn btn-secondary btn-sm w-full">Details</button>
                    </Link>

                </div>
            </div>
        </Container>
    );
};

export default AllCollege;
