import React, { useState, useEffect } from 'react';
import {Button, Col, Row, Container} from "reactstrap";
import base_url from "../../api/bootapi";
import axios from "axios";
import {toast} from 'react-toastify';
import Product from "./Product";

const AllProducts = () => {

    useEffect(() => {
        document.title = "all products";
    }, []);

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

    const UpdateProduct=(product_id)=>{
        setProducts(products.filter((p)=> p.product_id !== product_id));
    };

    return (
        <div>

            <div className = 'text-center' >
                <h1>All Products</h1>
                {/* <p>list of products are given:</p> */}
            </div>
            {/* {
                products.length > 0
                    ? products.map((item) => <Product key={item.product_id} product={item} update={UpdateProduct}/>)
                    : "No products"
            } */}

            <Container fluid>
                 <Row>
                    {
                        products.length > 0
                            ? products.map((item) => 
                            <Col sm="2">
                                <Product key={item.product_id} product={item} update={UpdateProduct}/>
                            </Col>
                            )
                            : "No products"
                    }
                  </Row> 
            </Container>  

        </div>
    );
};

export default AllProducts;