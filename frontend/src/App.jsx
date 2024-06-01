/* eslint-disable no-unused-vars */
import './App.css'
import Header from './components/templates/Header'
import { Outlet } from 'react-router-dom'
import backgroundSvg from './assets/background.svg'
import { ScrollArea } from './components/ui/scroll-area'
import { useRef } from 'react'
function App() {
  const scrollRef = useRef(null)
  return (
    <>
      <div className='h-screen relative' ref={scrollRef} style={{backgroundImage: `url(${backgroundSvg})`, backgroundPosition: 'center'}}>
        <Header></Header>
        <Outlet scrollRef={scrollRef}></Outlet>
      </div>
    </>
  )
}

export default App
