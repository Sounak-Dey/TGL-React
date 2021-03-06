import React, { useState, useEffect } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container } from 'reactstrap';
import axios from 'axios';
import base_url from "../../api/bootapi";
import {toast} from "react-toastify";

const Artist=({ artist, update }) => {

    const [image, setImage] = useState('');
    
    useEffect(() => {
        fetchArtistImage(artist.artist_id)
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

    const deleteArtist=(artist_id)=>{
        axios.delete(`${base_url}/artists/${artist_id}`).then(
            (response)=>{
                toast.success("artist deleted",{position: "bottom-center" });
                update(artist_id);
            },
            (error)=>{
                toast.error("Something went wrong!",{position: "bottom-center" });
            }
        )
    };
    return(
        <Card className = {'mt-5'} style = {{borderColor : 'black'}, {borderRadius : '3rem'}}>
            <CardImg top width="100%" src = {image} alt="Card image cap" />
            <CardBody className="text-center">
                <CardTitle className="font-weight-bold">{artist.name} {artist.artist_id}</CardTitle>
                <CardSubtitle>{artist.email} <br/>{artist.website}<br/> {artist.number}</CardSubtitle>
                <CardText>{artist.about}</CardText>
                <Container>
                   
                    <Button
                        color={"danger"}
                        onClick={()=>{
                            deleteArtist(artist.artist_id);
                        }}
                    >Delete</Button>
                </Container>
            </CardBody>
        </Card>
    )
}


export default Artist;