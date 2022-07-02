import React from "react";
import { Layout } from "antd";
import './list.scss'
import ListDataMovies from "../listItem/ListItem";

const ListComponent = () => {
    return (
        <Layout className="layout" >
            <ListDataMovies />
        </Layout>
    )
}
export default React.memo(ListComponent)
