import React from "react";
import './list.scss'
import ListDataMovies from "../listItem/ListItem";

const ListComponent = () => {
    return (
            <ListDataMovies />
    )
}
export default React.memo(ListComponent)
