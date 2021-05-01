import React, { useState, useEffect } from 'react';
import ArtistRequest from "./ArtistRequest";
import {Button} from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import {toast} from 'react-toastify';

const AllArtistRequests = () => {

    useEffect(() => {
        document.title="all artist requests";
    },[]);

    //function to call server;
    const getAllArtistRequestsFromServer=()=>{
        axios.get(`${base_url}/arequests`).then(
            (response)=>{
                console.log(response.data);
                toast.success("artist requests has been loaded",{
                    position: "bottom-center",
                });
                setArtistRequests(response.data);
            },
            (error)=>{
                console.log(error);
                toast.error("something went wrong",{position: "bottom-center",}
                );
            }
        )
    }

    useEffect(() => {
        getAllArtistRequestsFromServer()
    },[]);

    const [artistRequests,setArtistRequests] = useState([
    ])

    return(
        <div>

            <h1>All artist requests</h1>
            <p>list of artist requests are given:</p>
            {
                artistRequests.length>0
                    ? artistRequests.map((item)=> <ArtistRequest key={item.name} artistRequest={item}/>)
                    : "No pending requests"
            }

        </div>
    );
};

export default AllArtistRequests;