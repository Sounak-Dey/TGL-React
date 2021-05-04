import React, { useState, useEffect } from 'react';
import {Button} from "reactstrap";
import base_url from "../../api/bootapi";
import axios from "axios";
import {toast} from 'react-toastify';
import Product from "../Admin/Product";

const AllArtistProducts=()=>{

        useEffect(() => {
            document.title = "my products";
        }, []);

        const art_id = localStorage.getItem('id');

        //function to call server;
        const getAllArtistsProductsFromServer = () => {
            axios.get(`${base_url}/productsArt/${art_id}`).then(
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

                <h1>All Products</h1>
                <p>list of products are given:</p>
                {
                    products.length > 0
                        ? products.map((item) => <Product key={item.product_id} product={item} update={UpdateProduct}/>)
                        : "No products"
                }

            </div>
        );
    };


export default AllArtistProducts;