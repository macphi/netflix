import React from 'react';
// import { Row, Col, Card } from 'antd';
import './listItem.scss'


const ListDataMovies = ({ movies }) => {
    return (
        <div className="list-movies">
            <div className='info-movies'>
                <h1 className='title-movie'>Trending Now</h1>
                <div className='movies'>
                    {movies.map((item, index) => (
                        <span key={index} className='profile-movies'>
                            {<img alt={item.title} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />}
                            {/* {item.title} */}
                        </span>
                    ))
                    }
                </div>
            </div >
            <div className='info-movies'>
                <h1  className='title-movie' >Top 10 TV Shows In Word Day</h1>
                <div className='movies'>
                    {movies.map((item, index) => (
                        <span key={index} className='profile-movies'>
                            {<img alt={item.title} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />}
                            {item.title}
                        </span>
                    ))
                    }
                </div>

            </div >
        </div >
    )
}
export default React.memo(ListDataMovies);
