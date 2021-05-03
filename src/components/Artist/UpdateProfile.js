import React, {useEffect , useState} from 'react'
import axios from "axios";
import base_url from "../../api/bootapi";
import {toast} from "react-toastify";
import {Button, Container, Form, FormGroup} from "reactstrap";

const UpdateProfile=()=>{
    useEffect(()=>{
        document.title="Update";
        getArtistFromServer()
    },[]);

    //const [artist,setArtist]=useState({});
    const [artist2,setArtist2]=useState({});
    const email = localStorage.getItem('email')
    //function to call server;
    const getArtistFromServer=()=>{
        axios.get(`${base_url}/artists/${email}`).then(
            (response)=>{
                console.log(response.data);
                setArtist2(response.data);
                toast.success("artist is been loaded",{
                    position: "bottom-center",
                });

            },
            (error)=>{
                console.log(error);
                toast.error("something went wrong",{position: "bottom-center",}
                );
            }
        )
    }

    //form handler
    const handleForm=(e)=>{
        console.log(artist2);
        postDatatoServer(artist2);
        e.preventDefault();
    };

    const postDatatoServer= (data) => {
        axios.put( `${base_url}/artists`,data).then(
            (response)=>{
                console.log(response);
                toast.success("Updated!",{
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
                        name={"artistname"}
                        id={"name"}
                        value={artist2.name}
                        onChange={(e)=>{
                            setArtist2({...artist2,name: e.target.value})
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="email">Enter email:</label>
                    <input
                        type={"text"}
                        name={"artistemail"}
                        id={"email"}
                        value={artist2.email}
                        onChange={(e)=>{
                            setArtist2({...artist2,email: e.target.value})
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="website">Enter website:</label>
                    <input
                        type={"text"}
                        name={"artistwebsite"}
                        id={"website"}
                        value={artist2.website}
                        onChange={(e)=>{
                            setArtist2({...artist2,website: e.target.value})
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="number">Enter number:</label>
                    <input
                        type={"text"}
                        name={"artistnumber"}
                        id={"number"}
                        value={artist2.number}
                        onChange={(e)=>{
                            setArtist2({...artist2,number: e.target.value})
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="description">Enter Description:</label>
                    <input
                        type={"textarea"}
                        name={"artistdescription"}
                        id={"about"}
                        value={artist2.about}
                        style={{height:150}}
                        onChange={(e)=>{
                            setArtist2({...artist2,about: e.target.value})
                        }}
                    />
                </FormGroup>

                <Container className={"text-center"}>
                    <Button type="submit" color={"success"}>Update</Button>
                    <Button
                        type="reset"
                        color={"warning ml-3"}>Clear</Button>
                </Container>
            </Form>
        </div>
    )
}

export default UpdateProfile;