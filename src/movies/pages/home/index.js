import React, { useState, useEffect } from 'react'
import { api } from '../../services/api'
import './index.scss'
import NavbarComponent from '../../components/navbar/Navbar'
import FeaturedComponent from '../../components/featured/Featured'
import ListDataMovies from '../../components/listItem/ListItem'
import FooterComponent from '../../components/footer/Footer'

const LayoutComponets = () => {

    const [loading, setLoading] = useState(true);
    const [comingMovies, setComingMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [totalResult, setTotalResult] = useState(0);
    const [clickPage, setClickPage] = useState(false)

    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            const data = await api.getDataUpcomingMovies(page);
            if (data.hasOwnProperty('results')) {
                setComingMovies(data['results']);
            }
            if (page === 1 && clickPage === false) {
                if (data.hasOwnProperty('total_pages')) {
                    setTotalPage(data['total_pages'])
                }
                if (data.hasOwnProperty('total_results')) {
                    setTotalResult(data['total_results'])
                }
            }
            setLoading(false);
        }
        getData();
    }, [page, clickPage]);
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