import React from "react";
import useColleges from "../../hooks/useColleges";
import Container from "../Shared/Container";
import TotalCollege from "../TotalCollege/TotalCollege";

const Colleges = () => {
  const [colleges] = useColleges();

  return (
    <div className="">
      <h1 className="font-semibold text-5xl text-center m-10">Colleges Info</h1>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-0">
          {colleges.map((totalCollege) => (
            <TotalCollege key={totalCollege._id} totalCollege={totalCollege} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Colleges;