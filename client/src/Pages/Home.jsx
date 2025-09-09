import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Apic } from "../store/GetApi";

export default function Home() {

  const {data,isLoggedIn} = useContext(Apic);

  const [apiData, setApiData] = useState([]);
  
  useEffect(()=>{
    const api_url = 'https://api.api-ninjas.com/v1/quotes';
    const api_key = import.meta.env.VITE_API_URL;

    const getQuotes = async () =>{

      try {
        const response = await fetch(api_url,{
          method : "GET",
          headers : { 'X-Api-Key': api_key},
          contentType: 'application/json'
        },
      );

        const data = await response.json();

        setApiData(data[0]);
        
      } catch (error) {
        console.log(error);
        
      }

    }

    getQuotes();
  },[])

  return (
    <>
      <main>
        <div className=" home container">
          <div className="main-content">
            <h1 className="main-head red">kodifyre</h1>
            <p className="main-para"> 
            {apiData.quote} - { apiData.author}
            </p>
          
          <div className="main-links">

          {data.map((curr)=>{
          return ( <NavLink to={`courses/${curr.cardName}`} className="nav-link main-link" key={curr.id}> {curr.cardName} </NavLink> )
          }).slice(0,5)}

            <NavLink to="/courses" className="nav-link main-link"> and more ... </NavLink>
          </div>

{isLoggedIn &&   <NavLink to="/signup">
            <button className="btn main-btn" > join Now </button>
         </NavLink>}
          </div>

          <div className="main-img">
            <img src="Reader.jpg" alt="reader.jpg" />
          </div>
        </div>
      </main>
    </>
  );
}
