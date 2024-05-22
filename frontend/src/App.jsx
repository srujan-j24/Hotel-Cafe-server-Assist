/* eslint-disable no-unused-vars */
import './App.css'
import Header from './components/templates/Header'
import { Outlet } from 'react-router-dom'
import backgroundSvg from './assets/background.svg'
function App() {

  return (
    <>
      <div className='h-svh w-screen flex flex-col' style={{backgroundImage: `url(${backgroundSvg})`, backgroundPosition: 'center'}}>
        <Header></Header>
        <main className=' flex flex-col justify-center items-center grow' >
          <Outlet></Outlet>
        </main>
      </div>
    </>
  )
}

export default App
