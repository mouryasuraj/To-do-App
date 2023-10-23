import { createContext } from "react";

export const themeContext = createContext({
    theme:'light',
    lightTheme:() => {},
    darkTheme:() => {}
});


export const ThemeContextProvider = themeContext.Provider;
