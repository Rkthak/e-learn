/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const Apic = createContext();

export const ApiProvider = ( {children} ) => {

    const [token, setToken] = useState(localStorage.getItem('token'));
    const [data,setData] = useState([]);
    const [user, setUser] = useState("")

    // STORE USER TOKEN IN LOCALSTORAGE
    const storeTokenInLocalStorage = (serverToken) =>{
        setToken(serverToken);
        return localStorage.setItem("token",serverToken)
    }

    let isLoggedIn = !token;

    const LogOutFunction = () =>{
        setToken("");
        return localStorage.removeItem('token')
    }

    // ^ GET USER DATA 

    const userAuthorization = async () =>{
        const userGetURL = "http://localhost:5000/api/auth/user";
        try {
            const response = await fetch(userGetURL,{
                method : "GET",
                headers : {
                    Authorization : `bearer ${token}`,
                }
            })
    
            if(response.ok){
                const data = await response.json();
                setUser(data.userData);
            }
            
        } catch (error) {
            console.error("failed to fetch =>", error);
        }
    }

    // & get Courses DATA from API
    const getapi = async () =>{
        try {
            const URL = "http://localhost:3000/api/data/course";
        
            const response = await fetch(URL,{
                method : "GET"
            });
            
            const data = await response.json()
            setData(data)
            
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getapi();
    },[])

    useEffect(()=>{
        userAuthorization();
    })

    return <Apic.Provider value={{data, storeTokenInLocalStorage, isLoggedIn, LogOutFunction, user}}>
        {children}
    </Apic.Provider>
}
