import React,{Component} from "react";
import {Row, Col, Button} from "reactstrap";
import AllCategories from "./AllCategory";

const Dashboard=()=>{
    const allCate=()=>{

    }

    return(
        <div>
            <Row>
                <Col md={3}>
                   all categories
                </Col>
                <Col md={3}>
                    artists
                </Col>
                <Col ms={4}>
                    All products
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard;