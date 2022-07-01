import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import loadable from '@loadable/component'

const RegisterPages = loadable(() => import('../register/Register'))
const HomePages = loadable(() => import('../pages/home/index'))
const LoginPages = loadable(() => import('../login/Login'))
const SignupPages = loadable(()=> import('../signup/Signup'))

const RouteMovies = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RegisterPages />} />
                <Route path="/home" element={<HomePages />} />
                <Route path="/login" element={<LoginPages />} />
                <Route path="/signup" element={<SignupPages />} />
            </Routes>
        </BrowserRouter>
    )
}
export default React.memo(RouteMovies)