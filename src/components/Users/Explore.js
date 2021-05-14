import React, {Component, useEffect} from "react";
import {Row, Col, Button, Container, Label} from "reactstrap";
import { withRouter } from "react-router-dom";
// import bg from './wave.png'
import cg from './catgift.jpg'
import ag from './artgift.jpg'
import bg from './prodgift.jpg'

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
        <div >
           <Container className="themed-container" fluid={true}>
                <Row  >
                    <Col ms={4} className = 'text-center m-5'>
                        <Button  style={{width: '80%', height: '500%', backgroundImage: `url(${cg})` }} onClick={categories}/><br/>
                        <h1>All Categories</h1>
                    </Col>
                    <Col ms={4} className = 'text-center m-5'>

                        <Button  style={{width: '80%', height: '500%', backgroundImage: `url(${ag})` }} onClick={artists}/><br/>
                        <h1>All Artists</h1>
                    </Col>
                    <Col ms={4} className = 'text-center m-5'>
                    
                        <Button  style={{width: '80%', height: '500%', backgroundImage: `url(${bg})` }} onClick={products}/><br/>
                        <h1> All Products</h1>
                    </Col>
                </Row>
                <Row style={{marginTop:'15%'}}>
                    
                    <Col ms={6} className = 'text-center m-5'>

                    </Col>
                    
                </Row>
                <Row style={{marginTop:'5%'}}>
                    <Col  >
                        
                        <Button color={"success"} style={{marginLeft: '70%'}} onClick={cr}>Request for a new category</Button>
                    </Col>
                    <Col  >
                        <Button onClick={back} style={{width: '20%'}}>Back</Button>
                    </Col>
                </Row>
           </Container>
            
            
        </div>
    )
}

export default withRouter(Explore);