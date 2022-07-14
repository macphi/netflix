import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './listItem.scss'
import './ResponsiveListItem.scss'

const ListDataMovies = ({ movies }) => {
    return (
        <div className="list-movies">
            <div className='list-movies-item'>
                <h1 >Top 10 TV Shows In World Today</h1>
                <div className='list-movies-info'>
                    {movies.map((item, index) => (
                        // <Link to={`/${slugify(item.title)}~${item.id}`}>
                        <Link to='/watch'>
                            <span key={index} className='profile-movies'>
                                {<img  alt={item.title} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />}
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
