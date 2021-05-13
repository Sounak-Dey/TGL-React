import React, { useState, useEffect } from 'react'
import { ListGroup } from 'reactstrap';
import { Link } from "react-router-dom";
import {toast} from 'react-toastify';
import base_url from "../../api/bootapi";
import axios from "axios";


const Artists_Options=()=>{

    const email = localStorage.getItem('email');
    const [artist,setArtist] = useState({});
    //function to call server;
    const getArtistFromServer=()=>{
        axios.get(`${base_url}/artists/${email}`).then(
            (response)=>{
                console.log(response.data);
                setArtist(response.data);
                localStorage.setItem('id',response.data.artist_id);
                toast.success("artist is been loaded",{
                    position: "bottom-center",
                });

            },
            (error)=>{
                console.log(error);
                toast.error("something went wrong",{position: "bottom-center",}
                );
            }
        )
    }

    useEffect(() => {
        getArtistFromServer()
    },[]);


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