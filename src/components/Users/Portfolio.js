import React, {useEffect} from 'react';
import {Row,Col,Button} from 'reactstrap';
import Explore from "./Explore";

const Portfolio=(artist_id)=>{
    useEffect(() => {
        document.title = "Portfolio";
    }, []);

    return(
        <div>
            <Row>
                <Col md={4}>artist details</Col>
                <Col md={6}>artist products</Col>
            </Row>
            <Button color = {"primary"}>Back to Explore</Button>
        </div>
    )
}

export default Portfolio