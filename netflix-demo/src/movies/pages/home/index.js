import React from 'react'
// import { api } from '../../services/api'
import './index.scss'
import NavbarComponent from '../../components/navbar/Navbar'
import FeaturedComponent from '../../components/featured/Featured'
import ListComponent from '../../components/list/List'
import FooterComponent from '../../components/footer/Footer'


const LayoutComponets = () => {
    return (
        <div className='layoutcomponent'>
            <NavbarComponent />
            {/* <FeaturedComponent type='Series'/> */}
            <FeaturedComponent />
            <ListComponent />
            <FooterComponent />
        </div>
    )
}

export default React.memo(LayoutComponets)