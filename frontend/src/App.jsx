/* eslint-disable no-unused-vars */
import './App.css'
import Header from './components/templates/Header'
import { Outlet } from 'react-router-dom'
import backgroundSvg from './assets/background.svg'
import backgroundSvgDark from './assets/background dark.svg'
import { ScrollArea } from './components/ui/scroll-area'
import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { ThemeProvider, ThemeProviderContext, useTheme } from './ThemeProvider'

function App() {
  const {theme, setTheme} = useTheme();
  const [bgImage, setBgImage] = useState(theme == 'light' ? backgroundSvg: backgroundSvgDark) 
  useEffect(()=>{
    setBgImage(theme === 'light' ? backgroundSvg: backgroundSvgDark)
  },[theme])

  useEffect(()=>{
    setTheme('light')
  },[])
  
  return (
    <>
          <div className='h-dhv relative  bg-background transition-all duration-500'  style={{backgroundImage: `url(${bgImage})`, backgroundPosition: 'center'}}>
            <Header></Header>
            <Outlet></Outlet>
          </div>
    </>
  )
}

export default App