import React from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import FileUploader from './FileUploader';
import Header from './Header'
import Home from './Home'
import Login from './Login';
import SignUp from './SignUp';

export default function index() {
  return (
  <>
    {/* <Header /> */}
    <BrowserRouter>
        <Routes>
            <Route exact={true} path={'/'} element={<Home />} />
        </Routes>
        <Routes>
            <Route path={'/Login'} element={<Login />} />
        </Routes>
        <Routes>
            <Route path={'/SignUp'} element={<SignUp />} />
        </Routes>
        <Routes>
            <Route path={'/FileUploader'} element={<FileUploader />} />
        </Routes>
    </BrowserRouter>
  </>
  )
}
