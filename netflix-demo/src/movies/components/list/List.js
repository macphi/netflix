import React from "react";
import './list.scss'
import ListDataMovies from "../listItem/ListItem";

const ListComponent = () => {

    return (
        <div className="container">
            <div className="list">
                <span>Trending Now</span>
                <div className="list-movies">
                    <ListDataMovies />
                    <ListDataMovies />
                    <ListDataMovies />
                    <ListDataMovies />
                </div>
            </div>
        </div>
    )
}
export default React.memo(ListComponent)
