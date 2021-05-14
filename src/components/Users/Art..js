import React, { useState, useEffect } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Col } from 'reactstrap';
import axios from 'axios';
import base_url from "../../api/bootapi";
import {toast} from "react-toastify";
import { withRouter } from "react-router-dom";
import './Art.css'

const Art=({ art }) => {

    const [image, setImage] = useState('');
    
    useEffect(() => {
        fetchArtistImage(art.artist_id)
    },[]);

    const fetchArtistImage = (artist_id ) => {
        if (artist_id !== null) {
            axios.get(`${base_url}/artists/image/${artist_id}`, { responseType: 'blob' }).then(
                response => {
                if (response.data) {
                    setImage(URL.createObjectURL(response.data))
                } else {

                }
            }).catch(error => {
                console.log("Error", error);
            })
        }
    }

    return(
        
            <Card className = 'mt-5 bdr' style = {{borderColor : 'black'}, {borderRadius : '3rem'} }>
                <CardImg top width="100%" src = {image} alt="Card image cap" />
                <CardBody className="text-center">
                    <CardTitle className="font-weight-bold">{art.name} {art.artist_id}</CardTitle>
                    <CardSubtitle>{art.email} <br/>{art.website}<br/> {art.number}</CardSubtitle>
                    <CardText>{art.about}</CardText>
                </CardBody>
            </Card>
        
        
    )
}


export default withRouter(Art);