import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
// Auth Pages and directions.
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import AuthLayout from './layouts/AuthLayout'
// Other pages an directions.
import MainLayout from './layouts/MainLayout'
import MainPage from './pages/MainPage'
import { SearchResultsPage } from './pages/SearchResultsPage'


function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>

      <Route element={<MainLayout/>}>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/search' element={<SearchResultsPage/>}/>
      </Route>

      <Route element={<AuthLayout/>}>
         <Route path='/login' element={<LoginPage/>}/>
      </Route>

      <Route element={<AuthLayout/>}>
        <Route path='/register' element={<RegisterPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
