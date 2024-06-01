/* eslint-disable no-unused-vars */
import './App.css'
import Header from './components/templates/Header'
import { Outlet } from 'react-router-dom'
import backgroundSvg from './assets/background.svg'
import { ScrollArea } from './components/ui/scroll-area'
import { createContext, useRef } from 'react'
const ScrollContext = createContext(null);
function App() {
  const scrollRef = useRef(null)
  return (
    <>
      <ScrollContext.Provider value={scrollRef}>
        <div className='h-screen relative' ref={scrollRef} style={{backgroundImage: `url(${backgroundSvg})`, backgroundPosition: 'center'}}>
          <Header></Header>
          <Outlet scrollRef={scrollRef}></Outlet>
        </div>
      </ScrollContext.Provider>
    </>
  )
}

export default App
export {ScrollContext};