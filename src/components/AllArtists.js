import React, { useState, useEffect } from 'react';
import Artist from "./Artist";
import {Button} from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import {toast} from 'react-toastify';

const AllArtists = () => {

    useEffect(() => {
        document.title="all artists";
    },[]);

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

    const UpdateArtists=(artist_id)=>{
        setArtists(artists.filter((a)=> a.artist_id !== artist_id));
    };

    return(
        <div>

            <h1>All artists</h1>
            <p>list of artists are given:</p>
            {
                artists.length>0
                    ? artists.map((item)=> <Artist key={item.artist_id} artist={item} update={UpdateArtists} />)
                    : "No artists"
            }

        </div>
    );
};

export default AllArtists;