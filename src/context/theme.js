import React, {useContext, createContext, useState} from "react";

export const themeContext = createContext();

export function themeProvider ({Children}) {
    const [theme, setTheme] = useState('dark')

    return (
        <themeContext.Provider value = {{theme, setTheme}}>
            {Children}
        </themeContext.Provider>
    )
}
