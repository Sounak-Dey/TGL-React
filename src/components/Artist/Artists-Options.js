import React from 'react'
import { ListGroup } from 'reactstrap';
import { Link } from "react-router-dom";


const Artists_Options=()=>{
    return (
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/Artists-Options/My-Profile" action>My Profile</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/Artists-Options/add-product" action>Add Product</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/Artists-Options/all-products" action>My Products</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/Artists-Options/update-profile" action>Update Profile</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/Artists-Options/update-password" action>Change Password</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/Login" action>Log Out</Link>
        </ListGroup>
    )
}

export default Artists_Options;