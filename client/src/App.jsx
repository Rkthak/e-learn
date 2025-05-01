import { Routes, Route } from "react-router-dom";


import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import MainHeader from "./Components/MainHeader";
import SignUP from "./Pages/SignUP";
import About from "./Pages/About";
import Courses from "./Pages/Courses";
import Forgetpass from "./Pages/Forgetpass";

import "./index.scss"
import SingleCourse from "./Components/SingleCourse";
import Signin from "./Pages/Signin";
import Logout from "./Pages/Logout";
import Error from "./Pages/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainHeader />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUP />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/forgetpass" element={<Forgetpass />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={ <Courses/> } />
          <Route path="/courses/:lname" element={ <SingleCourse/> } />
        </Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </>
  );
}

export default App;
