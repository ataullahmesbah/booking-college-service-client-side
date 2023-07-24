
import useColleges from "../../hooks/useColleges";
import Container from "../Shared/Container";
import TotalCollege from "../TotalCollege/TotalCollege";

const Colleges = () => {
  const [colleges] = useColleges();
  const threeCollegeData = colleges.slice(0, 3);

  return (
    <div className="">
      <h3 className="text-blue-950 font-serif text-xl lg:text-4xl md:text-2xl text-center mt-10 mb-4">
      Find the Perfect College for You and <br />Dive into its Details
          </h3>
          <p className="text-center text-gray-500 font-mono mb-5">Embark on an Exciting Journey to Find Your Perfect College Match and Delve into the Intriguing <br /> World of Its Comprehensive Details and Offerings!</p>
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