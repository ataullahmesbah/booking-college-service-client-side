import { useContext, useState } from "react";
import { AuthContext } from "../Shared/Providers/AuthProviders";

import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import Container from "../Shared/Container";

const img_hosting_token = import.meta.env.VITE_Image;


const Review = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const hosting_img_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = (data) => {
        setIsSubmitting(true); // Disable the button on form submission

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

                    const { author_name, country, author_comment, email, rating } = data;
                    const reviewForm = { author_name, country, author_comment, email, image: imgURL, rating: parseFloat(rating) }

                    axiosSecure.post('/review', reviewForm)
                        .then(data => {
                            console.log('Review Submit Form', data.data);
                            if (data.data.insertedId) {
                                reset();
                                toast.success("Review submitted successfully!");
                                setIsSubmitting(false); // Enable the button after successful submission
                                history.push("/"); // Redirect to another page after successful submission
                            }
                        })


                }
            })

    };



    return (
        <Container>
            <div className="p-10">


                <h2 className="text-5xl font-bold text-center pt-20 mb-10 text-blue-950">College:  <span className="text-gray-500">Review Form Fill Up</span></h2>
                <p className="text-center text-stone-500 font-serif mb-8">Please take a moment to share your valuable review and feedback by filling in the form and submitting it.</p>

                <form onSubmit={handleSubmit(onSubmit)}>




                    <div className="flex gap-4">

                        {/* Author Name */}
                        <div className="form-control w-full my-4">
                            <label className="label">
                                <span className="label-text font-semibold">Author Name*</span>

                            </label>
                            <input type="text" placeholder="Author Name"
                                {...register("author_name", { required: true, maxLength: 120 })}
                                className="input input-bordered w-full " />

                        </div>

                        {/* Country */}
                        <div className="form-control w-full my-4">
                            <label className="label">
                                <span className="label-text font-semibold">Country*</span>

                            </label>
                            <input type="text" placeholder="Country"
                                {...register("country", { required: true, maxLength: 120 })}

                                className="input input-bordered w-full " />

                        </div>
                    </div>
                    <div className="flex gap-4 my-4">

                    </div>

                    <div className="flex gap-4">

                        {/* author email  */}
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold">E-mail*</span>

                            </label>
                            <input type="text" placeholder="Author E-mail"
                                {...register("email", { required: true, maxLength: 120 })}
                                defaultValue={user?.email}
                                className="input input-bordered w-full " />

                        </div>

                        {/* Rating */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Rating*</span>
                            </label>
                            <input
                                type="text" // Use type="text" to allow pattern validation
                                {...register("rating", {
                                    required: true,
                                    pattern: /^[1-5]$/, // Regular expression to allow only whole numbers between 1 and 5
                                    validate: (value) => parseFloat(value) <= 5 // Custom validation to check for maximum value
                                })}
                                placeholder="Rating"
                                className={`input input-bordered w-full ${errors.rating ? "input-error" : ""}`} // Add a class for error styling
                            />
                            {errors.rating && (
                                <p className="text-red-500">Please enter a valid rating between 1 and 5.</p>
                            )}
                        </div>

                    </div>

                    {/* Comment */}
                    <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text font-semibold">Comment*</span>
                        </label>
                        <textarea
                            {...register("author_comment", { required: true, maxLength: 5000 })}
                            placeholder="Enter your comment here"
                            className="textarea textarea-bordered w-full"
                        />
                    </div>




                    <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text font-semibold ">Author Image*</span>

                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered  w-full max-w-xs" />

                    </div>
                    <input
                        className="btn btn-sm btn-accent mt-2"
                        type="submit"
                        value="Review Submit"
                        disabled={isSubmitting} // Disable the button if isSubmitting is true
                    />
                </form>
                <ToastContainer />
            </div>
        </Container>
    );
};

export default Review;