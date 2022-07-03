import React from 'react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
// import { Row, Col, Card } from 'antd';
import './listItem.scss'


const ListDataMovies = ({ movies }) => {
    return (
        <div className="list-movies">
            <div className='list-movies-item'>
                <h1 >Trending Now</h1>
                <div className='list-movies-info'>
                    {movies.map((item, index) => (
                        <Link to={`/${slugify(item.title)}~${item.id}`}>
                            <span key={index} className='profile-movies'>
                                {<img alt={item.title} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />}
                                <br />
                                {item.title}
                            </span>
                        </Link>
                    ))
                    }
                </div>
            </div >
            <div className='list-movies-item'>
                <h1 >Top 10 TV Shows In World Today</h1>
                <div className='list-movies-info'>
                    {movies.map((item, index) => (
                        <Link to={`/${slugify(item.title)}~${item.id}`}>
                            <span key={index} className='profile-movies'>
                                {<img alt={item.title} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />}
                                <br />
                                {item.title}
                            </span>
                        </Link>
                    ))
                    }
                </div>
            </div >
        </div >
    )
}
export default React.memo(ListDataMovies);
