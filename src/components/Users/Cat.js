import React,{ useState, useEffect } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';
import axios from "axios";
import base_url from "../../api/bootapi";
import {toast} from "react-toastify";

const Cat=({ cat })=>{

    const [image, setImage] = useState('');
    
    useEffect(() => {
        fetchCategoryImage(cat.category_id)
    },[]);

    const fetchCategoryImage = (category_id ) => {
        if (category_id !== null) {
            axios.get(`${base_url}/category/image/${category_id}`, { responseType: 'blob' }).then(
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
        <Card className = {'mt-5'} style = {{borderColor : 'black'}, {borderRadius : '3rem'} }>
            <CardImg top width="100%" src={image} alt="Card image cap" />
            <CardBody className="text-center">
                <CardTitle className="font-weight-bold">{cat.name}</CardTitle>
                <CardText>{cat.about}</CardText>
            </CardBody>
        </Card>
    )
}


export default Cat;