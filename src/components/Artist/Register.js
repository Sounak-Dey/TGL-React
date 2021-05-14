import React, {useEffect , useState} from 'react'
import {Button, Form, FormGroup, Label, Input, FormText, Container} from 'reactstrap';
import axios from "axios";
import base_url from "../../api/bootapi";
import {toast} from 'react-toastify';
import { withRouter } from "react-router-dom";

const Register=(props)=>{
    useEffect(() => {
        document.title="register";
    },[]);

    const [artist,setArtist]=useState({});
    var [photo, setPhoto] = useState(null);    

    //form handler function
    const handleForm=(e)=>{
        console.log(artist);
        postDatatoServer(artist);
        e.preventDefault();
    };

    const back=()=>{
        let path='/';
        props.history.push(path);
    }

    // image handler
    const uploadImage = (event) => {

        setPhoto(event.target.files[0]);
        console.log(photo);

    }
        

    //creating function to post all data
    const postDatatoServer= (data) => {
        
        const formData = new FormData();
        formData.append('file', photo);
        formData.append('about', data['about']);
        formData.append('email', data['email']);
        formData.append('name', data['name']);
        formData.append('password', data['password']);
        formData.append('number', data['number']);
        formData.append('website', data['website']);

        axios.post( `${base_url}/register`,formData).then(
            response => {
                console.log(response);

                if(response.data == "ok"){

                    toast.success("Artist added!",{
                        position: "bottom-center",
                        }
                    );
                }
                else{
                    toast.error("USERNAME ALREADY EXISTS");
                }

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
                <FormGroup className='m-5'>
                    <label for="photo" style={{marginLeft: '35%'}}>Set Image: </label>
                    <input 
                        type='file'  
                        id="file-upload"   
                        accept="image/png, image/jpeg" 
                        style={{marginLeft: '10%'}}
                        onChange = {uploadImage}
                    />
                </FormGroup>
                <FormGroup className='m-5'>
                    <label for="username" style={{marginLeft: '35%'}}>Enter Name:</label>
                    <input
                        type={"text"}
                        placeholder={"name"}
                        name={"artistname"}
                        id={"name"}
                        style={{marginLeft: '10%'}}
                        onChange={(e)=>{
                            setArtist({...artist,name: e.target.value})
                        }}
                    />
                </FormGroup>
                <FormGroup className='m-5'>
                    <label for="username" style={{marginLeft: '35%'}}>Enter email:</label>
                    <input
                        type={"text"}
                        placeholder={"Username"}
                        name={"artistemail"}
                        id={"email"}
                        style={{marginLeft: '11%'}}
                        onChange={(e)=>{
                            setArtist({...artist,email: e.target.value})
                        }}
                    />
                </FormGroup>
                <FormGroup className='m-5'>
                    <label for="email" style={{marginLeft: '35%'}}>Enter password:</label>
                    <input
                        type={"password"}
                        placeholder={"password"}
                        name={"artistpassword"}
                        id={"password"}
                        style={{marginLeft: '9%'}}
                        onChange={(e)=>{
                            setArtist({...artist,password: e.target.value})
                        }}
                    />
                </FormGroup>
                <FormGroup className='m-5'>
                    <label for="website" style={{marginLeft: '35%'}}>Enter website:</label>
                    <input
                        type={"text"}
                        placeholder={"website"}
                        name={"artistwebsite"}
                        id={"website"}
                        style={{marginLeft: '10%'}}
                        onChange={(e)=>{
                            setArtist({...artist,website: e.target.value})
                        }}
                    />
                </FormGroup>
                <FormGroup className='m-5'>
                    <label for="number" style={{marginLeft: '35%'}}>Enter number:</label>
                    <input
                        type={"text"}
                        placeholder={"number"}
                        name={"artistnumber"}
                        id={"number"}
                        style={{marginLeft: '10%'}}
                        onChange={(e)=>{
                            setArtist({...artist,number: e.target.value})
                        }}
                    />
                </FormGroup>
                <FormGroup className='m-5'>
                    <label for="description" style={{marginLeft: '35%'}}>Enter Description:</label>
                    <input
                        type={"textarea"}
                        placeholder={"description"}
                        name={"artistdescription"}
                        id={"about"}
                        style={{height:150, marginLeft: '8%'}}
                        onChange={(e)=>{
                            setArtist({...artist,about: e.target.value})
                        }}
                    />
                </FormGroup>
                

                <Container className={"text-center"}>
                    <Button type="submit" color={"success"}>Register</Button>
                    <Button
                        type="reset"
                        color={"warning ml-3"}
                        >Clear</Button>
                    <Button style={{marginLeft:'1%'}} onClick={back}>Back</Button>
                </Container>
            </Form>
        </div>
    )
}

export default withRouter(Register);