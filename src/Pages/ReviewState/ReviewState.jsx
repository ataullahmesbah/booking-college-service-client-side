
import useReview from "../../hooks/useReview";
import Container from "../Shared/Container";
import ReviewDetails from "./ReviewDetails";

const ReviewState = () => {
    const [review] = useReview();
    const reviewSlice = review.slice(0, 3);

    return (
        <div className="mb-20">
            <h3 className="text-blue-900 font-serif text-xl lg:text-5xl md:text-2xl text-center m-10">
            Testimonials
            </h3>
            <p className="text-center text-gray-500 font-medium m-5">Discover what our students have to say about their experience</p>
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-10 ">
                    {reviewSlice.map((reviewDetails) => (
                        <ReviewDetails key={reviewDetails._id} reviewDetails={reviewDetails} />
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default ReviewState;
