import React from "react"
import { createContext } from "react"

 export const themecontext=createContext();

export const ThemeContextProvider=({children})=>{
const [theme,setTheme]=React.useState("light");

function handleTheme(){
setTheme(theme==="light"?"dark":"light");
}

  return( <themecontext.Provider value={{theme,handleTheme}} >
    {children}
  </themecontext.Provider>)

}

    
