
import useColleges from "../../hooks/useColleges";
import Container from "../Shared/Container";
import TotalCollege from "../TotalCollege/TotalCollege";

const Colleges = () => {
  const [colleges] = useColleges();
  const threeCollegeData = colleges.slice(0, 3);

  return (
    <div className="">
      <h3 className="text-blue-900 font-serif text-xl lg:text-5xl md:text-2xl text-center m-10">
            Best Famous College Booking Details
          </h3>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-0">
          {threeCollegeData.map((totalCollege) => (
            <TotalCollege key={totalCollege._id} totalCollege={totalCollege} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Colleges;