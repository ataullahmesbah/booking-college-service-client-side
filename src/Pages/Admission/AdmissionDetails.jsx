import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdmissionDetails = ({ admissionDetails, index }) => {
  const { _id, img, college_name } = admissionDetails;

  const handleSubmitForm = () => {
    // submit form
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <img className="w-16 h-16 rounded-full" src={img} alt="" />
      </td>
      <Link
          to={`/appliedcollege/${_id}`}
          onClick={handleSubmitForm}
          state={{ college_name }}
        >
      <td className="text-xl font-semibold flex items-center gap-10">
      <span className="text-blue-950">{college_name}</span>
        
          
          <FaEdit />
        
      </td>
      </Link>
    </tr>
  );
};

export default AdmissionDetails;
