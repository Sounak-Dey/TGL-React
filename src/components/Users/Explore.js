import React, {Component, useEffect} from "react";
import {Row, Col, Button, Container} from "reactstrap";
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
           <Container className="themed-container" fluid={true}>
                <Row>
                    <Col ms={6} className = 'text-center m-5'>
                        
                        <Button color={"primary"} onClick={categories}>all categories</Button>
                    </Col>
                    <Col ms={6} className = 'text-center m-5'>

                        <Button color={"primary"} onClick={artists}>all artists</Button>
                    </Col>
                </Row>
                <Row>
                    <Col ms={6} className = 'text-center m-5'>
                    
                        <Button color={"primary"} onClick={products}>all products</Button>
                    </Col>
                    <Col ms={6} className = 'text-center m-5'>
                    
                        <Button color={"primary"} onClick={cr}>Request for a category</Button>
                    </Col>
                    
                </Row>
                <Row>
                    <Col className = 'text-center m-5' >
                        <Button onClick={back}>Back</Button>
                    </Col>
                </Row>
           </Container>
            
            
        </div>
    )
}

export default withRouter(Explore);