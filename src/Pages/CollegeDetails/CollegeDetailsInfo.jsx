

const CollegeDetailsInfo = ({ collegeInfo }) => {
    const { img, college_name, admission_process, event_details, research_work, sports_details } = collegeInfo;

    return (
        <div className="card lg:card-side bg-base-100 shadow-2xl mb-16 p-8">
            <figure>
                
                <img src={img} className="px-5" alt="Album" />
                
                </figure>
            <div className="card-body">

                <h2 className="card-title text-3xl font-bold">{college_name}
                </h2>
                <p><span className="font-medium text-xl">Admission Process: </span> {admission_process}</p>
                <p><span className="font-medium text-xl">Event Details: </span> {event_details}</p>
                <p><span className="font-medium text-xl">Research Works: </span> {research_work}</p>
                <p><span className="font-medium text-xl">Sports Categories: </span> {sports_details}</p>


            </div>
        </div>
    );
};

export default CollegeDetailsInfo;
