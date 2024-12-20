import { createContext, useState } from "react";


export const CheckLoggedIn=createContext();

export const GlobalStateProvider=({children})=>{
const [isLoggedIn,setLoggedIn]=useState(false);
return(
<GlobalStateProvider value={{isLoggedIn,setLoggedIn}}>


    {children}
</GlobalStateProvider>

)

}