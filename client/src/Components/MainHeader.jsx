import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainHeader = () => {
  return (
    <>
      <Header/>
      <div className="content"><Outlet/></div>
      <Footer/>
    </>
  )
}

export default MainHeader
