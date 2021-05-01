import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';

const ArtistRequest=({ artistRequest })=>{

    return(
        <Card>
            <CardImg top width="100%" src={artistRequest.photo} alt="Card image cap" />
            <CardBody className="text-center">
                <CardTitle className="font-weight-bold">{artistRequest.name}</CardTitle>
                <CardSubtitle>{artistRequest.email} <br/>{artistRequest.website}<br/> {artistRequest.number}</CardSubtitle>
                <CardText>{artistRequest.about}</CardText>
                <Container>
                    <Button color={"success"}>Approve</Button>
                    <Button color={"danger"}>Deny</Button>
                </Container>
            </CardBody>
        </Card>
    )
}


export default ArtistRequest;