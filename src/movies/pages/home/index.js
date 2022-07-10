import React, { useState, useEffect } from 'react'
import { api } from '../../services/api'
import './index.scss'
import NavbarComponent from '../../components/navbar/Navbar'
import FeaturedComponent from '../../components/featured/Featured'
import ListDataMovies from '../../components/listItem/ListItem'
import FooterComponent from '../../components/footer/Footer'

const LayoutComponets = () => {
    const [comingMovies, setComingMovies] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const data = await api.getDataUpcomingMovies();
            setComingMovies(data['results']);
        }
        getData();
    }, []);
    return (
        <div className='layoutcomponent'>
            <NavbarComponent />
            {/* <FeaturedComponent type='Series'/> */}
            <FeaturedComponent />
            <ListDataMovies
                movies={comingMovies} />
            <FooterComponent />
        </div>
    )
}

export default React.memo(LayoutComponets)