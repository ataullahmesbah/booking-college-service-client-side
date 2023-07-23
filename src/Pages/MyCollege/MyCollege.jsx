import { useContext } from "react";
import useApplication from "../../hooks/useApplication";
import Container from "../Shared/Container";
import { AuthContext } from "../Shared/Providers/AuthProviders";


const MyCollege = () => {
    const { user } = useContext(AuthContext);
    const appliedForm = useApplication(user?.email);



    return (
        <Container>
            <div className="pt-20">

                <h2 className="text-xl lg:text-5xl font-bold text-center m-16 text-gray-500">Colleges I Have Chosen or <span className="text-blue-900">Applied To</span></h2>


                <div className="mb-16">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-gray-100 rounded-lg uppercase">
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>College Name</th>
                                <th>Subject</th>
                                <th>Email</th>
                                <th>Phone No.</th>
                                <th>Review</th>
                              

                            </tr>
                        </thead>

                        <tbody>
                            {
                                appliedForm.map((applied, index) => <tr
                                    key={applied._id}
                                >
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={applied.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>{applied.candidate_name
                                    }</td>
                                    <td>{applied.college
                                    }</td>
                                    <td>{applied.subject_name
                                    }</td>
                                    <td>{applied.email
                                    }</td>
                                    <td>{applied.phone_number
                                    }</td>
                                    <td>
                                        <button className="btn btn-sm btn-accent">Review</button>
                                    </td>


                                </tr>
                                )
                            }

                        </tbody>

                    </table>

                </div>
            </div>
        </Container>
    );
};

export default MyCollege;