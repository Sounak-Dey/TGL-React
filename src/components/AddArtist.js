import React, {useEffect , useState} from 'react'
import {Button, Form, FormGroup, Label, Input, FormText, Container} from 'reactstrap';
import axios from "axios";
import base_url from "../api/bootapi";
import {toast} from 'react-toastify';

const AddArtist=()=>{
    useEffect(() => {
        document.title="add artist";
    },[]);

    const [artist,setArtist]=useState({});

    //form handler function
    const handleForm=(e)=>{
        console.log(artist);
        postDatatoServer(artist);
        e.preventDefault();
    };

    //creating function to post data
    const postDatatoServer= (data) => {
        axios.post( `${base_url}/artists`,data).then(
        (response)=>{
            console.log(response);
            toast.success("Artist added!",{
                position: "bottom-center",
            });

        },(error)=>{
            console.log(error);
            toast.error("Something went wrong!",{
                position: "bottom-center",
            })
        }
        )
    };

    return (
        <div>
            <h1 className={"text-center"}> Fill the details : </h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="username">Enter Name:</label><br/>
                    <input
                        type={"text"}
                        placeholder={"name"}
                        name={"artistname"}
                        id={"name"}
                        onChange={(e)=>{
                            setArtist({...artist,name: e.target.value})
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="email">Enter email:</label>
                    <input
                        type={"text"}
                        placeholder={"email"}
                        name={"artistemail"}
                        id={"email"}
                        onChange={(e)=>{
                            setArtist({...artist,email: e.target.value})
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="website">Enter website:</label>
                    <input
                        type={"text"}
                        placeholder={"website"}
                        name={"artistwebsite"}
                        id={"website"}
                        onChange={(e)=>{
                            setArtist({...artist,website: e.target.value})
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="number">Enter number:</label>
                    <input
                        type={"text"}
                        placeholder={"number"}
                        name={"artistnumber"}
                        id={"number"}
                        onChange={(e)=>{
                            setArtist({...artist,number: e.target.value})
                        }}
                    />
                </FormGroup>
               <FormGroup>
                   <label for="description">Enter Description:</label>
                    <input
                        type={"textarea"}
                        placeholder={"description"}
                        name={"artistdescription"}
                        id={"about"}
                        style={{height:150}}
                        onChange={(e)=>{
                            setArtist({...artist,about: e.target.value})
                        }}
                    />
               </FormGroup>

                <Container className={"text-center"}>
                    <Button type="submit" color={"success"}>Add Artist</Button>
                    <Button
                        type="reset"
                        color={"warning ml-3"}>Clear</Button>
                </Container>
            </Form>
        </div>
    )
}

export default AddArtist