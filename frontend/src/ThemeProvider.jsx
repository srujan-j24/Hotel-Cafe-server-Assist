/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";

const initialState = {
    theme: 'system',
    setTheme: () => null,
}

export const ThemeProviderContext = createContext(initialState);

export function ThemeProvider({children, defaultTheme='system', storageKey='web_assist_theme', ...props}){
    const [theme, setTheme] = useState(()=>{
        (localStorage.getItem(storageKey)) || defaultTheme
    })

    useEffect(()=>{
        const root = window.document.documentElement
        root.classList.remove('light', 'dark')
        if(theme != 'system'){
            root.classList.add(theme);
        }else{
            console.log(window.matchMedia("(prefers-color-scheme: dark)"))
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
                .matches ? 'dark' : 'light';
            root.classList.add(systemTheme);
            setTheme(systemTheme)
        }
    }, [theme])

    const value = {
        theme: theme,
        setTheme: (theme) =>{
            localStorage.setItem(storageKey, theme)
            setTheme(theme)
        }
    }


    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

export const useTheme = () =>{
    const context = useContext(ThemeProviderContext);

    if(context === undefined)
        throw new Error("useTheme must be used within a ThemeProvider")

    return context;
}