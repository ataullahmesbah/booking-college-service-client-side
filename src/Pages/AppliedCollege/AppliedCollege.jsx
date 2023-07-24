import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Shared/Providers/AuthProviders";
import Swal from "sweetalert2";
import Container from "../Shared/Container";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const img_hosting_token = import.meta.env.VITE_Image;


const AppliedCollege = () => {

    const location = useLocation();
    const { college_name } = location.state || {};

    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);
    const hosting_img_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`



    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('image', data.image[0])
    
        fetch(hosting_img_url, {
          method: 'POST',
          body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
          if (imgResponse.success) {
            const imgURL = imgResponse.data.display_url;
    
            const { candidate_name, subject_name, email, phone_number, address, college, date_of_birth } = data;
            const appliedForm = { candidate_name, subject_name, phone_number: parseFloat(phone_number), image: imgURL, email, address, date_of_birth, college }
    
            console.log(appliedForm);
            axiosSecure.post('/application', appliedForm)
              .then(data => {
                console.log('Application Submit Form', data.data);
                if (data.data.insertedId) {
                  reset();
                  toast.success("Application submitted successfully!");
                  history.push("/"); // Redirect to another page after successful submission
                }
              })
              
          }
        })
        
      };


    return (
        <Container>
            <div className="p-10">


                <h2 className="text-5xl font-bold text-center pt-20 mb-10 text-blue-950">Admission:  <span className="text-gray-500">Form Fill Up</span></h2>
                <p className="text-center text-stone-500 font-serif mb-8">Please enter the Candidate Name, subject, Candidate Email, Candidate Phone number, address, date of birth, and a brief description of the application. <br /> Additionally, you can provide any relevant details or attach a photo if necessary.</p>

                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* candidate Application College  */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Choose Your Dream College*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="College Name"
                            {...register("college", { required: true, maxLength: 120 })}
                            defaultValue={college_name || ""} // Set college_name as the default value or an empty string if it's null
                            className="input input-bordered w-full text-xl font-semibold"
                            readOnly // Add the readOnly attribute to prevent user input
                        />
                    </div>


                    <div className="flex gap-4">

                        {/* Candidate Name */}
                        <div className="form-control w-full my-4">
                            <label className="label">
                                <span className="label-text font-semibold">Candidate Name*</span>

                            </label>
                            <input type="text" placeholder="Candidate Name"
                                {...register("candidate_name", { required: true, maxLength: 120 })}
                                className="input input-bordered w-full " />

                        </div>

                        {/* Subjects */}
                        <div className="form-control w-full my-4">
                            <label className="label">
                                <span className="label-text font-semibold">Subject*</span>

                            </label>
                            <input type="text" placeholder="Subject"
                                {...register("subject_name", { required: true, maxLength: 120 })}

                                className="input input-bordered w-full " />

                        </div>
                    </div>
                    <div className="flex gap-4 my-4">

                        {/* phone number */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Phone Number*</span>

                            </label>
                            <input type="number" {...register("phone_number", { required: true })} placeholder="Phone Number" className="input input-bordered w-full " />


                        </div>

                        {/* address */}

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold">Address*</span>

                            </label>
                            <input type="text" {...register("address", { required: true })} placeholder="Address" className="input input-bordered w-full " />

                        </div>
                    </div>

                    <div className="flex gap-4">

                        {/* candidate email  */}
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold">E-mail*</span>

                            </label>
                            <input type="text" placeholder="Candidate E-mail"
                                {...register("email", { required: true, maxLength: 120 })}
                                defaultValue={user?.email}
                                className="input input-bordered w-full " />

                        </div>

                        {/* date of birth */}
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold">Date of Birth*</span>

                            </label>
                            <input type="date" placeholder="Date of Birth"
                                {...register("date_of_birth", { required: true, maxLength: 120 })}

                                className="input input-bordered w-full " />

                        </div>

                    </div>


                    <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text font-semibold ">Candidate Image*</span>

                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered  w-full max-w-xs" />

                    </div>
                    <input className="btn btn-sm btn-accent mt-2" type="submit" value="Submit" />
                </form>
                <ToastContainer />
            </div>
        </Container>
    );
};

export default AppliedCollege;