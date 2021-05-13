import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';
import axios from "axios";
import base_url from "../../api/bootapi";
import {toast} from "react-toastify";

const Prod=({ prod })=>{

    return(
        <Card>
            <CardImg top width="100%" alt="Card image cap" />
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