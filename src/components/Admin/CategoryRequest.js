import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';
import axios from "axios";
import base_url from "../../api/bootapi";
import {toast} from "react-toastify";
import {useState} from 'react';

const CategoryRequest=({ categoryRequest,update })=>{

    const deleteRequest=(request_id)=>{
        axios.delete(`${base_url}/crequest/${request_id}`).then(
            (response)=>{
                toast.success("request deleted",{position: "bottom-center" });
                update(request_id);
            },
            (error)=>{
                toast.error("Something went wrong!",{position: "bottom-center" });
            }
        )
    };

   // const [category,setCategory] = useState({});

    const addCategory= (data) => {
        axios.post( `${base_url}/categories`,data).then(
            (response)=>{
                console.log(response);
                toast.success("Category added!",{
                    position: "bottom-center",
                });
                update(data.request_id);

            },(error)=>{
                console.log(error);
                toast.error("Something went wrong!",{
                    position: "bottom-center",
                })
            }
        )
    };


    return(
        <Card>
            <CardImg top width="100%" alt="Card image cap" />
            <CardBody className="text-center">
                <CardTitle className="font-weight-bold">{categoryRequest.name}</CardTitle>
                <CardText>{categoryRequest.about}</CardText>
                <Container>
                    <Button color={"success"} onClick={()=>{
                        addCategory(categoryRequest);
                        deleteRequest(categoryRequest.request_id);
                    }}>Approve</Button>
                    <Button color={"danger"} onClick={()=>{
                                deleteRequest(categoryRequest.request_id);
                            }}>Deny</Button>
                </Container>
            </CardBody>
        </Card>
    )
}


export default CategoryRequest;