import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import LoginPage from './components/templates/LoginPage/LoginPage.jsx'
import ServePage from './components/templates/ServePage/ServePage.jsx'
import { Provider } from 'react-redux';
import { store } from './store/store.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<LoginPage/>}></Route>
      <Route path='login' element={<LoginPage/>}></Route>
      <Route path='serve' element={<ServePage/>}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
