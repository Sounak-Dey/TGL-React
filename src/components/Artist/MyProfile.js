import React, { useState, useEffect } from 'react';
import Artist from "../Admin/Artist";
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Container} from "reactstrap";
import base_url from "../../api/bootapi";
import axios from "axios";
import {toast} from 'react-toastify';

const MyProfile=()=>{

        useEffect(() => {
            document.title="My profile";
        },[]);

        const email = localStorage.getItem('email');
    const [artist,setArtist] = useState({});
        //function to call server;
        const getArtistFromServer=()=>{
            axios.get(`${base_url}/artists/${email}`).then(
                (response)=>{
                    console.log(response.data);
                    setArtist(response.data);
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



        // const UpdateArtists=(artist_id)=>{
        //     setArtists(artists.filter((a)=> a.artist_id !== artist_id));
        // };
        return(
            <div>

                {/*<h1>All artists</h1>*/}
                {/*<p>list of artists are given:</p>*/}
                {/*{*/}
                {/*    artists.length>0*/}
                {/*        ? artists.map((item)=> <Artist key={item.artist_id} artist={item}  />)*/}
                {/*        : "No artists"*/}
                {/*}*/}

                <Card>
                    <CardImg top width="100%" src="./images/a3.jpg" alt="Card image cap" />
                    <CardBody className="text-center">
                        <CardTitle className="font-weight-bold">{artist.name} {artist.artist_id}</CardTitle>
                        <CardSubtitle>{artist.email} <br/>{artist.website}<br/> {artist.number}</CardSubtitle>
                        <CardText>{artist.about}</CardText>
                        <Container>
                            <Button color={"success"}>Update</Button>
                        </Container>
                    </CardBody>
                </Card>
            </div>
        );
}
export default MyProfile;