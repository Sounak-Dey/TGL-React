import React, { useState, useEffect } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';
import axios from "axios";
import base_url from "../../api/bootapi";
import {toast} from "react-toastify";

const Product=({ product,update })=>{

    const [image, setImage] = useState('');

    useEffect(() => {
        viewUploadedFile(product.product_id)
    },[]);

    const viewUploadedFile = (product_id ) => {
        if (product_id !== null) {
            axios.get(`${base_url}/products/image/${product_id}`, { responseType: 'blob' }).then(
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

    const deleteProduct=(product_id)=>{
        axios.delete(`${base_url}/products/${product_id}`).then(
            (response)=>{
                toast.success("product deleted",{position: "bottom-center" });
                update(product_id);
            },
            (error)=>{
                toast.error("Something went wrong!",{position: "bottom-center" });
            }
        )
    };

    return(
        <Card>
            <CardImg top width="100%" src = {image} alt="Card image cap" />
            <CardBody className="text-center">
                <CardTitle className="font-weight-bold">{product.name}</CardTitle>
                <CardSubtitle>{product.price} <br/>
                {/*<br/> {product.art_id.name}*/}
                </CardSubtitle>
                <CardText>{product.description}</CardText>
                <Container>
                    <Button color={"primary"}>Select</Button>
                    <Button color={"danger"}
                            onClick={()=>{
                                deleteProduct(product.product_id);
                            }}>Delete</Button>
                </Container>
            </CardBody>
        </Card>
    )
}


export default Product;