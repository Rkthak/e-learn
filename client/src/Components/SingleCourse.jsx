import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SingleCourse = () => {
  const {lname} = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const URL = `http://localhost:3000/api/data/course/${lname}`;

  const isVarified = ["fullstack-development","frontend-development","backend-development","html","css","javascript","react.js","node.js","express.js","mongodb"]

useEffect(()=>{
  if (!isVarified.includes(lname.toLowerCase())) {
    alert("the path you enter does not exists")
    navigate("/courses");
  }
})

  useEffect(() => {
    const single = async () => {
      try {
        const response = await fetch(URL, {
          method: "GET",
        });

        const data = await response.json();
        
        if (response.ok) {
          setData(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    single();
  }, [URL]);

  

  return (
    <>
      <button className="btn scbakbtn" onClick={()=>{navigate(-1)}}>back</button>
      <div className="container">
        <h3 className="scques">What is {data.cardName} ?</h3>
        <p className="scans"> {data.about} </p>
        <p>{data.functions?.[0].how}</p>
        <p>{data.functions?.[0].path}</p>
        <iframe src={data.iframe} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen aria-hidden="true"></iframe>
      </div>
    </>
  )
}

export default SingleCourse;
