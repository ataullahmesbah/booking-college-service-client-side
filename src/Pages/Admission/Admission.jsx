import useColleges from "../../hooks/useColleges";
import Container from "../Shared/Container";
import AdmissionDetails from "./AdmissionDetails";


const Admission = () => {
    const [colleges] = useColleges();

    return (
        <Container>
            <div className="pt-20">
                <h2 className="lg:text-4xl text-center font-bold  m-16">College Admission </h2>


                <table className="table w-full m-10">

                    <thead className="uppercase">
                        <tr>

                            <th>#</th>
                            <th>Image</th>
                            <th>College Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            colleges.map((admissionDetails, index) => <AdmissionDetails
                                key={admissionDetails._id}
                                admissionDetails={admissionDetails}
                                index={index}
                            ></AdmissionDetails>)
                        }
                    </tbody>





                </table>

            </div>



        </Container>
    );
};

export default Admission;