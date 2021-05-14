import React, { useState, useEffect } from 'react';
import Art from "./Art.";
import {Button, Col, Row, Container} from "reactstrap";
import base_url from "../../api/bootapi";
import axios from "axios";
import {toast} from 'react-toastify';
import { withRouter } from "react-router-dom";
import './Art.css';

const AllArt = (props) => {

    useEffect(() => {
        document.title="all artists";
    },[]);

    const back=()=>{
        let path='/Explore';
        props.history.push(path);
    }

    //function to call server;
    const getAllArtistsFromServer=()=>{
        axios.get(`${base_url}/artists`).then(
            (response)=>{
                console.log(response.data);
                toast.success("artists has been loaded",{
                    position: "bottom-center",
                });
                setArtists(response.data);
            },
            (error)=>{
                console.log(error);
                toast.error("something went wrong",{position: "bottom-center",}
                    );
            }
        )
    }

    useEffect(() => {
        getAllArtistsFromServer()
    },[]);

    const [artists,setArtists] = useState([]);


    return(
        <div>
            
            <div className = 'text-center' >
                <h1>All Artists</h1>
                {/* <p>list of artists are given:</p> */}
            </div>
            <Container fluid>
                 <Row>
                    {
                        
                        artists.length>0
                            ? artists.map((item)=> 
                        
                                    <Col sm='3'>
                                        <Art key={item.artist_id} art={item} />
                                    </Col>
                            
                            
                                )
                            : "No artists"
                    }
                </Row>
            </Container>
            <Button onClick={back}>Back</Button>

        </div>
    );
};

export default withRouter(AllArt);