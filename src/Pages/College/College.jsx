import useColleges from "../../hooks/useColleges";
import AllCollege from "../AllCollege/AllCollege";
import Container from "../Shared/Container";

const College = () => {
  const [colleges] = useColleges();

  return (
    <div className="pt-20 mb-20">
      <h3 className="text-blue-900 font-serif text-xl lg:text-5xl md:text-2xl text-center m-10">
        Booking College Service Details
      </h3>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-0">
          {colleges.map((allCollege) => (
            <AllCollege key={allCollege._id} allCollege={allCollege} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default College;
