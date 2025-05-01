import { useContext, useEffect } from "react"
import { Navigate } from "react-router-dom";
import { Apic } from "../store/GetApi";

const Logout = () => {

    const {LogOutFunction} = useContext(Apic);

    useEffect(()=>{
        LogOutFunction()
    },[LogOutFunction])

  return (
    <Navigate to="/signin"/>
  )
}

export default Logout
