import React, { useState, useEffect } from 'react';
import Cat from "./Cat";
import {Button, Col, Row, Container} from "reactstrap";
import base_url from "../../api/bootapi";
import axios from "axios";
import {toast} from 'react-toastify';
import { withRouter } from "react-router-dom";

const AllCat = (props) => {

    useEffect(() => {
        document.title = "all categories";
    }, []);

    const back=()=>{
        let path='/Explore';
        props.history.push(path);
    }
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



    return (
        <div>
            <div className = 'text-center' >
                <h1>Categories</h1>
                {/* <p>list of categories are given:</p> */}
            </div>
            
            {/* {
                categories.length > 0
                    ? categories.map((item) => <Cat key={item.category_id} cat={item}/>)
                    : "No categories"
            } */}

            <Container fluid>
                 <Row>
                    {
                        
                        categories.length>0
                            ? categories.map((item)=> 
                        
                                    <Col sm='3'>
                                        <Cat key={item.category_id} cat={item}/>
                                    </Col>
                            
                                )
                            : "No categories"
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

export default withRouter(AllCat);