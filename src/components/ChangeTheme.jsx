import { useEffect, useState } from "react";
import { ThemeContextProvider } from "../context/Theme"


function ChangeTheme() {
  const [theme, setTheme] = useState("light");

  // LightTheme funciton
  const lightTheme = () =>{
    setTheme('light')
  }
  const darkTheme = () =>{
    setTheme('dark')
  }

  // Dark theme function
  const handleTheme = () =>{
    if(theme === 'light'){
      darkTheme()
    }else{
      lightTheme()
    }
  }


  useEffect(()=>{
    const html = document.querySelector('html');
    html.classList.remove('dark', 'light');
    html.classList.add(theme)
  },[theme])


  return (
    <ThemeContextProvider value={{theme, lightTheme, darkTheme}}>
      <button onClick={handleTheme} className='absolute right-5 px-3 rounded-sm py-2 dark:bg-slate-100 hover:bg-slate-700 dark:hover:opacity-95 dark:text-slate-800 font-medium bg-slate-800 text-slate-100 lg:text-xl text-md'>{theme==='light' ? 'Dark' : 'Light'}</button>
    </ThemeContextProvider>
  )
}

export default ChangeTheme
