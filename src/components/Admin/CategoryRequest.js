import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';

const CategoryRequest=({ categoryRequest })=>{

    return(
        <Card>
            <CardImg top width="100%" alt="Card image cap" />
            <CardBody className="text-center">
                <CardTitle className="font-weight-bold">{categoryRequest.name}</CardTitle>
                <CardText>{categoryRequest.about}</CardText>
                <Container>
                    <Button color={"success"}>Approve</Button>
                    <Button color={"danger"}>Deny</Button>
                </Container>
            </CardBody>
        </Card>
    )
}


export default CategoryRequest;