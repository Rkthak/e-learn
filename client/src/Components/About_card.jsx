import About_card_data from "./About_card_data";

const About_card = () => {
  return (
    <>
      {About_card_data.map((curr,idx) => {
        return (
            <div className="about_info" key={idx}>
              <i className={`fa-solid ${curr.icon}`}></i>
              <p>
               {curr.para}
              </p>
            </div>

        );
      })}
    </>
  );
};

export default About_card;
