import React, { useState } from 'react'
import { ListGroup, Collapse, Button }  from 'reactstrap';
import { Link } from "react-router-dom";

const Admin_Options=(props)=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
        <ListGroup>
            <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Artists</Button>
            <Collapse isOpen={isOpen}>
            <ListGroup>
                <Link className="list-group-item list-group-item-action" tag="a" to="/Admin-Options/add-artist" action>Add Artist</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/Admin-Options/all-artists" action>All Artists</Link>
            </ListGroup>
            </Collapse>
            <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Categories</Button>
            <Collapse isOpen={isOpen}>
            <ListGroup>
                <Link className="list-group-item list-group-item-action" tag="a" to="/Admin-Options/add-category" action>Add Category</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/Admin-Options/all-categories" action>All Categories</Link>
            </ListGroup>
            </Collapse>
            <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Requests</Button>
            <Collapse isOpen={isOpen}>
                <ListGroup>
                    <Link className="list-group-item list-group-item-action" tag="a" to="/Admin-Options/all-artist-requests" action>Artist Requests</Link>
                    <Link className="list-group-item list-group-item-action" tag="a" to="/Admin-Options/all-category-requests" action>Category Requests</Link>
                </ListGroup>
            </Collapse>
            <ListGroup>
                <Link className="list-group-item list-group-item-action" tag="a" to="/Admin-Options/all-products" action>Products</Link>
            </ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/home" action>Log Out</Link>
        </ListGroup>
        </div>
    )
}

export default Admin_Options;