import React,{ useState, useEffect } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';
import axios from "axios";
import base_url from "../../api/bootapi";
import {toast} from "react-toastify";

const Prod=({ prod })=>{

    const [image, setImage] = useState('');

    useEffect(() => {
        fetchProductImage(prod.product_id)
    },[]);

    const fetchProductImage = (product_id ) => {
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

    return(
        <Card>
            <CardImg top width="100%" src = {image} alt="Card image cap" />
            <CardBody className="text-center">
                <CardTitle className="font-weight-bold">{prod.name}</CardTitle>
                <CardSubtitle>{prod.price} <br/>
                {/*<br/> {product.art_id.name}*/}
                </CardSubtitle>
                <CardText>{prod.description}</CardText>
            </CardBody>
        </Card>
    )
}


export default Prod;