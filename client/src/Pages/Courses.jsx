import Course_card from "../Components/Course_card";

const Courses = () => {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <h2> Courses </h2>
        </div>

        <div className="course container">

              <Course_card />

        </div>
      </div>
    </>
  );
};

export default Courses;
