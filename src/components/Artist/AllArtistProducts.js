import React, { useState, useEffect } from 'react';
import {Button, Col, Row, Container} from "reactstrap";
import base_url from "../../api/bootapi";
import axios from "axios";
import {toast} from 'react-toastify';
import Product from "../Admin/Product";

const AllArtistProducts=()=>{

        useEffect(() => {
            document.title = "my products";
        }, []);

        const email = localStorage.getItem('email');

        //function to call server;
        const getAllArtistsProductsFromServer = () => {
            axios.get(`${base_url}/productsArt/${email}`).then(
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
            getAllArtistsProductsFromServer()
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
                            <Col sm="3">
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


export default AllArtistProducts;