

const InfoCollegeDetails = ({ infoCollege }) => {

    const { img, sports_details, event_details, college_name } = infoCollege;
    return (
        <div className="card card-side bg-base-100 shadow-2xl p-5 m-10">
            <figure>

                <img src={img} alt="Movie" />
            </figure>

            <div className="card-body space-y-3">

                <h2 className="card-title lg:text-4xl font-bold">{college_name}</h2>

                <p><span className="font-semibold text-xl">Event Details: </span>{event_details}</p>
                <p><span className="font-semibold text-xl ">Sports Details: </span>{sports_details}</p>

            </div>
        </div>
    );
};

export default InfoCollegeDetails;