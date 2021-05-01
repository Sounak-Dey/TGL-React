import React, { useState, useEffect } from 'react';
import CategoryRequest from "./CategoryRequest";
import {Button} from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import {toast} from 'react-toastify';

const AllCategoryRequests = () => {

    useEffect(() => {
        document.title="all Category requests";
    },[]);

    //function to call server;
    const getAllCategoryRequestsFromServer=()=>{
        axios.get(`${base_url}/crequests`).then(
            (response)=>{
                console.log(response.data);
                toast.success("category requests has been loaded",{
                    position: "bottom-center",
                });
                setCategoryRequests(response.data);
            },
            (error)=>{
                console.log(error);
                toast.error("something went wrong",{position: "bottom-center",}
                );
            }
        )
    }

    useEffect(() => {
        getAllCategoryRequestsFromServer();
    },[]);

    const [categoryRequests,setCategoryRequests] = useState([
    ])

    return(
        <div>

            <h1>All Category Requests</h1>
            <p>list of requests are given:</p>
            {
                categoryRequests.length>0
                    ? categoryRequests.map((item)=> <CategoryRequest key={item.name} categoryRequest={item}/>)
                    : "No requests"
            }

        </div>
    );
};

export default AllCategoryRequests;