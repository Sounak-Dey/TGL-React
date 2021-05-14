import React, { useState, useEffect } from 'react';
import {Button, Col, Row, Container} from "reactstrap";
import base_url from "../../api/bootapi";
import axios from "axios";
import {toast} from 'react-toastify';
import Prod from './Prod'
import { withRouter } from "react-router-dom";

const AllProd = (props) => {

    useEffect(() => {
        document.title = "all products";
    }, []);

    const back=()=>{
        let path='/Explore';
        props.history.push(path);
    }

    //function to call server;
    const getAllProductsFromServer = () => {
        axios.get(`${base_url}/products`).then(
            (response) => {
                console.log(response.data);
                toast.success("products has been loaded", {
                    position: "bottom-center",
                });
                setProducts(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("something went wrong", {position: "bottom-center",}
                );
            }
        )
    }

    useEffect(() => {
        getAllProductsFromServer()
    }, []);

    const [products, setProducts] = useState([])

    return (
        <div>
            <div className = 'text-center' >
            <h1>Products</h1>
            {/* <p>list of products are given:</p> */}
            </div>
            <Container fluid>
                 <Row>
                    {
                        products.length > 0
                            ? products.map((item) => 
                            <Col sm="2">
                                <Prod key={item.product_id} prod={item} />
                            </Col>
                            )
                            : "No products"
                    }
                  </Row> 
            </Container>      

                <Row>
                    <Col className = 'text-center m-5' >
                        <Button onClick={back}>Back</Button>
                    </Col>
                </Row>

        </div>
    );
};

export default withRouter(AllProd);