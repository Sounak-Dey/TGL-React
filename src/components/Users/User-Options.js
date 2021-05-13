import React from 'react'
import { ListGroup } from 'reactstrap';
import { Link } from "react-router-dom";

const User_Options=()=>{
    return (
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/User-Options/all-artists" action>All artists</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/User-Options/all-products" action>All Product</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/User-Options/all-categories" action>all categories</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/User-Options/add-category-request" action>Add category request</Link>
        </ListGroup>
    )
}

export default User_Options