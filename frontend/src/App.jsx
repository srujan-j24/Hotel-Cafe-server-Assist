/* eslint-disable no-unused-vars */
import './App.css'
import LoginPage from '@/components/templates/LoginPage/LoginPage'
import HomePage from '@/components/templates/HomePage/HomePage'
import Header from './components/templates/HomePage/Header'
function App() {

  return (
    <>
      <LoginPage>
        <Header></Header>
      </LoginPage>
      {/* <HomePage></HomePage> */}
    </>
  )
}

export default App
