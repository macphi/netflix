import React from "react";
import './list.scss'
import ListDataMovies from "../listItem/ListItem";

const ListComponent = () => {

    return (
        <div className="list">
            <div className="list-movies">
                <span>Trending Now</span>
                <ListDataMovies />
            </div>
        </div>
    )
}
export default React.memo(ListComponent)
