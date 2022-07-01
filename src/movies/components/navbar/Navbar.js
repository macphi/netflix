import React from 'react'
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { Link } from 'react-router-dom';
import './navbar.scss'


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

                    <SearchIcon className='icon' />
                    <NotificationsIcon className='icon' />
                    <img src="https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong.jpg" alt="" />
                    {/* <div className="profile">
                    <ArrowDropDownIcon className='icon' />
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div> */}
                    <Link to='/login'>
                        <LoginOutlinedIcon className='login' />
                    </Link>

                </div>
            </div>
        </div>
    )
}
export default React.memo(NavbarComponent) 