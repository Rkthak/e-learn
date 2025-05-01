import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Apic } from "../store/GetApi";

const Course_card = () => {
  const {data} = useContext(Apic);

  return (
    <>
      {data.map((curr) => {
        return ( <div className="card" key={curr.id}>
              <div className="card-img">
                <img src="Laptop.jpg" alt="Laptop" />
              </div>
              <div className="card-contents">
                <div className="card-head">
                  <h3>
                    {curr.cardName.length <= 12
                      ? curr.cardName
                      : curr.cardName.substring(0, 12) + "..."}
                  </h3>
                  <p>{curr.Des}</p>
                </div>

                <NavLink to={curr.cardName}>
                  <button className="btn main-btn card-btn">read now</button>
                </NavLink>
              </div>
            </div>

        );
      })}
    </>
  );
};

export default Course_card;
