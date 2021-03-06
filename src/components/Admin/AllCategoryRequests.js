import React, { useState, useEffect } from 'react';
import CategoryRequest from "./CategoryRequest";
import {Button, Col, Row, Container} from "reactstrap";
import base_url from "../../api/bootapi";
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
    ]);

    const UpdateRequests=(request_id)=>{
        setCategoryRequests(categoryRequests.filter((r)=> r.request_id !== request_id));
    };

    return(
        <div>

            <div className = 'text-center' >
                <h1>All Category Requests</h1>
                {/* <p>list of products are given:</p> */}
            </div>
            {/* {
                categoryRequests.length>0
                    ? categoryRequests.map((item)=> <CategoryRequest key={item.name} categoryRequest={item}
                    update={UpdateRequests}/>)
                    : "No requests"
            } */}

            <Container fluid>
                 <Row>
                    {
                        categoryRequests.length > 0
                            ? categoryRequests.map((item) => 
                            <Col sm="3">
                                <CategoryRequest key={item.name} categoryRequest={item} update={UpdateRequests}/>
                            </Col>
                            )
                            : "No categoryRequests"
                    }
                  </Row> 
            </Container>

        </div>
    );
};

export default AllCategoryRequests;