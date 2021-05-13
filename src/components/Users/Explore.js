import React, {Component, useEffect} from "react";
import {Row, Col, Button} from "reactstrap";
import { withRouter } from "react-router-dom";

const Explore=(props)=>{

    useEffect(() => {
        document.title = "Explore";
    }, []);

    const back=()=>{
        let path='/';
        props.history.push(path);
    }

    const artists=()=>{
        let path='/all-artists';
        props.history.push(path);
    }


    const categories=()=>{
        let path='/All-Categories';
        props.history.push(path);
    }

    const products=()=>{
        let path='/All-Products';
        props.history.push(path);
    }

    const cr=()=>{
        let path='/add-category-request';
        props.history.push(path);
    }


    return(
        <div>
           
            <Row>
                <Col md={3}>
                       
                    <Button color={"primary"} onClick={categories}>all categories</Button>
                </Col>
                <Col md={3}>

                    <Button color={"primary"} onClick={artists}>all artists</Button>
                </Col>
                <Col ms={4}>
                
                    <Button color={"primary"} onClick={products}>all products</Button>
                </Col>
                <Col ms={4}>
                
                    <Button color={"primary"} onClick={cr}>Request for a category</Button>
                </Col>
                <Button onClick={back}>Back</Button>
            </Row>
        </div>
    )
}

export default withRouter(Explore);