import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';
import axios from "axios";
import base_url from "../../api/bootapi";
import {toast} from "react-toastify";

const Cat=({ cat })=>{


    
    return(
        <Card>
            <CardImg top width="100%" src="./images/a1.jpeg" alt="Card image cap" />
            <CardBody className="text-center">
                <CardTitle className="font-weight-bold">{cat.name}</CardTitle>
                <CardText>{cat.about}</CardText>
            </CardBody>
        </Card>
    )
}


export default Cat;