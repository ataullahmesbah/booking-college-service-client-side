import { FaEdit } from "react-icons/fa";

const AdmissionDetails = ({ admissionDetails, index }) => {
    const { img, college_name } = admissionDetails;



    return (
        <tr className="">
            <td>{index + 1}</td>
            <td><img className="w-16 h-16 rounded-full" src={img} alt="" /></td>

            <td className="text-xl font-semibold flex items-center gap-10">
                <span className="text-blue-950">{college_name}</span>
                <FaEdit />
            </td>




        </tr>
    );
};

export default AdmissionDetails;