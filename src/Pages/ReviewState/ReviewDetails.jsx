
import { FaQuoteRight } from "react-icons/fa";

const ReviewDetails = ({ reviewDetails }) => {
    const { author_name, country, author_comment, image, rating } = reviewDetails;

    return (
        <div className="mt-10 border border-stone-400 p-5 rounded-lg relative bg-gray-700 ">
            <div className="flex items-center mb-5 gap-6 text-gray-300">
                <img className="w-11 h-11 rounded-full" src={image} alt={author_name} />
                <div>
                    <p className="font-semibold text-xl">{author_name}</p>
                    <p className="font-mono">{country}</p>
                </div>
            </div>

            <p className="text-slate-300 px-2 mb-5">
                "{author_comment && author_comment.length > 190
                    ? `${author_comment.slice(0, 190)}...`
                    : author_comment}  "
            </p>

            <p className="mb-8 px-2"> <span className="text-slate-300 font-medium">College Rating: </span>{rating}</p>
            <FaQuoteRight className="absolute text-4xl text-gray-400 bottom-0 mx-5 right-0 transform translate-x-2 -translate-y-2" />
        </div>
    );
};

export default ReviewDetails;
