import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';
import axios from "axios";
import base_url from "../../api/bootapi";
import {toast} from "react-toastify";

const Category=({ category,update })=>{

    const deleteCategory=(category_id)=>{
        axios.delete(`${base_url}/categories/${category_id}`).then(
            (response)=>{
                toast.success("category deleted",{position: "bottom-center" });
                update(category_id);
            },
            (error)=>{
                toast.error("Something went wrong!",{position: "bottom-center" });
            }
        )
    };
    return(
        <Card>
            <CardImg top width="100%" src="./images/a1.jpeg" alt="Card image cap" />
            <CardBody className="text-center">
                <CardTitle className="font-weight-bold">{category.name}</CardTitle>
                <CardText>{category.about}</CardText>
                <Container>
                    <Button color={"primary"}>Select</Button>
                    <Button color={"success"}>Update</Button>
                    <Button color={"danger"}
                            onClick={()=>{
                                deleteCategory(category.category_id);
                            }}>Delete</Button>
                </Container>
            </CardBody>
        </Card>
    )
}


export default Category;