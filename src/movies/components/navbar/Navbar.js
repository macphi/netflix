import React from 'react'
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { Link } from 'react-router-dom';
import './navbar.scss'
import './ResponsiveNavbar.scss'

const NavbarComponent = () => {
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
                    <span>Home</span>
                    <span>TV Show</span>
                    <span>Movies</span>
                    <span>New & Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    {/* <div className="search-navbar">
                        <div className="search-input">
                            <input type="text" placeholder='Search movies a enter' />
                            <div className="search-icon">
                            </div>
                            </div>
                        </div> */}
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