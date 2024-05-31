/* eslint-disable no-unused-vars */
import './App.css'
import Header from './components/templates/Header'
import { Outlet } from 'react-router-dom'
import backgroundSvg from './assets/background.svg'
import { ScrollArea } from './components/ui/scroll-area'
function App() {

  return (
    <>
      <div className='h-screen relative' style={{backgroundImage: `url(${backgroundSvg})`, backgroundPosition: 'center'}}>
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
