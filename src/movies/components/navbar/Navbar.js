import React from 'react'
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { Link, } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import './ResponsiveNavbar.scss'
import './navbar.scss'

const NavbarComponent = () => {
    const [isOpen,setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    }
    return (
        <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Logonfx.png" alt="" />
                    <a href='/home'>Home</a>
                    <a href='/home'>TV Show</a>
                    <a href='/home'>Movies</a>
                    <a href='/home'>New & Popular</a>
                    <a href='/home'>My List</a>
                    <button className='icons-menu'><MenuIcon className='icons-menu'/></button>
                </div>
                <div className="right">
                    <SearchIcon className='icon' />
                    <NotificationsIcon className='icon' />
                    <img src="https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong.jpg" alt="" />
                    <Link to='/login'>
                        <LoginOutlinedIcon className='login-home' />
                    </Link>

                </div>
            </div>
        </div>
    )
}
export default React.memo(NavbarComponent) 