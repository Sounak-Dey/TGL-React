import React, {Component, useEffect} from "react";
import {Row, Col, Button} from "reactstrap";
import AllCategory from "../Admin/AllCategory";
import AllArtists from "../Admin/AllArtists";
import AllProducts from "../Admin/AllProducts";

const Explore=()=>{

    useEffect(() => {
        document.title = "Explore";
    }, []);

    return(
        <div>
             hi from explore
            <Row>
                <Col md={3}>
                       
                    <Button color={"primary"}>all categories</Button>
                </Col>
                <Col md={3}>
                    artists
                    <Button color={"primary"}>all artists</Button>
                </Col>
                <Col ms={4}>
                    All products
                    <Button color={"primary"}>all products</Button>
                </Col>
            </Row>
        </div>
    )
}

export default Explore;