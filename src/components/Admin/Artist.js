import React, { useState, useEffect } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';
import axios from 'axios';
import base_url from "../../api/bootapi";
import {toast} from "react-toastify";

const Artist=({ artist,update })=>{
    
    useEffect(() => {
        viewUploadedFile(artist.artist_id)
    },[]);

    const viewUploadedFile = (artist_id ) => {

        const [progress, setProgress] = useState('');
        const [image, setimage] = useState('');

        setProgress(true)

        // this.setState({
        //     ...this.state,
        //     progress: true
        // })
        if (this.state.document_id !== null) {
        axios.get(`${base_url}/artists/image/${artist_id}`, {
            id: this.state.document_id
        }, { responseType: 'arraybuffer' }).then(response => {
            if (response.data) {
                setimage(URL.createObjectURL(response.data))
                // this.setState({
                //     ...this.state,
                //     image: URL.createObjectURL(response.data)
                // })
        //         const file = new Blob([response.data], { type: 'application/png' });
        //         let reader = new FileReader();
        //         reader.readAsDataURL(file);
        //         reader.onloadend = function () {
        //             let base64String = reader.result;
        //             document.getElementById('avatar-image').src = "data:image/png;base64"+base64String;
        //             console.log(base64String);
        // }
        //         const fileURL = URL.createObjectURL(file);
        //         window.open(fileURL, "_blank");
            } else {

            }
        }).catch(error => {
            console.log("Error", error);
        })
        setProgress(false)
        // this.setState({
        //     ...this.state,
        //     progress: false
        // })
    }
}

    const deleteArtist=(artist_id)=>{
        axios.delete(`${base_url}/artists/${artist_id}`).then(
            (response)=>{
                toast.success("artist deleted",{position: "bottom-center" });
                update(artist_id);
            },
            (error)=>{
                toast.error("Something went wrong!",{position: "bottom-center" });
            }
        )
    };
    return(
    <Card>
        <CardImg top width="100%" src = {btoa(image)} alt="Card image cap" />
        <CardBody className="text-center">
            <CardTitle className="font-weight-bold">{artist.name} {artist.artist_id}</CardTitle>
            <CardSubtitle>{artist.email} <br/>{artist.website}<br/> {artist.number}</CardSubtitle>
            <CardText>{artist.about}</CardText>
            <Container>
                <Button color={"primary"}>Select</Button>
                <Button
                    color={"danger"}
                    onClick={()=>{
                        deleteArtist(artist.artist_id);
                    }}
                >Delete</Button>
            </Container>
        </CardBody>
    </Card>
    )
}


export default Artist;