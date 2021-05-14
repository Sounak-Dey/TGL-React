import React, { useState, useEffect } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';
import axios from "axios";
import base_url from "../../api/bootapi";
import {toast} from "react-toastify";


const CategoryRequest=({ categoryRequest,update })=>{

    const [image, setImage] = useState('');
    
    useEffect(() => {
        fetchCategoryReqImage(categoryRequest.request_id)
    },[]);

    const fetchCategoryReqImage = (request_id ) => {
        if (request_id !== null) {
            axios.get(`${base_url}/crequest/image/${request_id}`, { responseType: 'blob' }).then(
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
        <Card className = {'mt-5'} style = {{borderColor : 'black'}, {borderRadius : '3rem'}}>
            <CardImg top width="100%" src = {image} alt="Card image cap" />
            <CardBody className="text-center">
                <CardTitle className="font-weight-bold">{categoryRequest.name}</CardTitle>
                <CardText>{categoryRequest.about}</CardText>
                <Container>
                    <Button className='m-1' color={"success"} onClick={()=>{
                        addCategory(categoryRequest);
                        deleteRequest(categoryRequest.request_id);
                    }}>Approve</Button>
                    <Button className='m-1' color={"danger"} onClick={()=>{
                                deleteRequest(categoryRequest.request_id);
                            }}>Deny</Button>
                </Container>
            </CardBody>
        </Card>
    )
}


export default CategoryRequest;