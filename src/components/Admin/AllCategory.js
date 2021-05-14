import React, { useState, useEffect } from 'react';
import Category from "./Category";
import {Button, Col, Row, Container} from "reactstrap";
import base_url from "../../api/bootapi";
import axios from "axios";
import {toast} from 'react-toastify';

const AllCategory = () => {

    useEffect(() => {
        document.title = "all categories";
    }, []);

    //function to call server;
    const getAllCategoriesFromServer = () => {
        axios.get(`${base_url}/categories`).then(
            (response) => {
                console.log(response.data);
                toast.success("categories has been loaded", {
                    position: "bottom-center",
                });
                setCategories(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("something went wrong", {position: "bottom-center",}
                );
            }
        )
    }

    useEffect(() => {
        getAllCategoriesFromServer()
    }, []);

    const [categories, setCategories] = useState([])

    const UpdateCategory=(category_id)=>{
        setCategories(categories.filter((c)=> c.category_id !== category_id));
    };

    return (
        <div>

            <div className = 'text-center' >
                <h1>All Categories</h1>
                {/* <p>list of categories are given:</p> */}
            </div>    
            {/* {
                categories.length > 0
                    ? categories.map((item) => <Category key={item.category_id} category={item} update={UpdateCategory}/>)
                    : "No categories"
            } */}

            <Container fluid>
                 <Row>
                    {
                       categories.length > 0
                            ? categories.map((item) => 
                            <Col sm="4">
                                <Category key={item.category_id} category={item} update={UpdateCategory}/>
                            </Col>
                            )
                            : "No Categories"
                    }
                  </Row> 
            </Container>  


        </div>
    );
};

export default AllCategory;