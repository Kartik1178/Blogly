

import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const LoggedInContext=createContext();
 const CheckLoggedIn = ({children}) => {
  const getToken = () => {
    return document.cookie.split("; ").find(row => row.startsWith("token="));
  };

  const [isLoggedIn,setisLoggedIn]=useState(false);
  useEffect(()=>{
axios.get("http://localhost:5000/users/checkfortoken",{withCredentials:true}).then(reponse=>{
if(reponse.status==200){
setisLoggedIn(true);
console.log(isLoggedIn);
}
else{
    setisLoggedIn(false);
}
console.log(isLoggedIn);
}) .catch(error=>{
  setisLoggedIn(false);
  console.log(error);
}
)


  },[]);

  
    return (
   <LoggedInContext.Provider value={{isLoggedIn,setisLoggedIn}}>
{children}

   </LoggedInContext.Provider>
  )
};
export default CheckLoggedIn;
