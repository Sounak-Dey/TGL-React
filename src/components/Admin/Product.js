import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';
import axios from "axios";
import base_url from "../../api/bootapi";
import {toast} from "react-toastify";

const Product=({ product,update })=>{

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
            <CardImg top width="100%" alt="Card image cap" />
            <CardBody className="text-center">
                <CardTitle className="font-weight-bold">{product.name}</CardTitle>
                <CardSubtitle>{product.price} <br/>
                {/*<br/> {product.art_id.name}*/}
                </CardSubtitle>
                <CardText>{product.description}</CardText>
                <Container>
                    <Button color={"primary"}>Select</Button>
                    <Button color={"success"}>Update</Button>
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