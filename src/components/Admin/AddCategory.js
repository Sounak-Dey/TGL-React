import React, {useEffect , useState} from 'react'
import {Button, Form, FormGroup, Label, Input, FormText, Container} from 'reactstrap';
import axios from "axios";
import base_url from "../../api/bootapi";
import {toast} from 'react-toastify';

const AddCategory=()=>{

    useEffect(() => {
        document.title="add categories";
    },[]);

    const [category,setCategory]=useState({});

    //form handler function
    const handleForm=(e)=>{
        console.log(category);
        postDatatoServer(category);
        e.preventDefault();
    };

    var [photo, setPhoto] = useState(null);

    // image handler
    const uploadImage = (event) => {

        setPhoto(event.target.files[0]);
        console.log(photo);

    }

    // about: "asdasd"
    // name: "mkbhd"


    //creating function to post data
    const postDatatoServer= (data) => {

        const formData = new FormData();
        formData.append('file', photo);
        formData.append('about', data['about']);
        formData.append('name', data['name']);


        axios.post( `${base_url}/categories`,formData).then(
            (response)=>{
                console.log(response);
                toast.success("Category added!",{
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
                    <label for="photo">Set Image: </label>
                    <input 
                        type='file'  
                        id="file-upload"   
                        accept="image/png, image/jpeg" 
                        onChange = {uploadImage}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="username">Enter Name:</label><br/>
                    <input
                        type={"text"}
                        placeholder={"name"}
                        name={"categoryname"}
                        id={"name"}
                        onChange={(e)=>{
                            setCategory({...category,name: e.target.value})
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="description">Enter Description:</label>
                    <input
                        type={"textarea"}
                        placeholder={"description"}
                        name={"categorydescription"}
                        id={"about"}
                        style={{height:150}}
                        onChange={(e)=>{
                            setCategory({...category,about: e.target.value})
                        }}
                    />
                </FormGroup>

                <Container className={"text-center"}>
                    <Button type="submit" color={"success"}>Add Category</Button>
                    <Button
                        type="reset"
                        color={"warning ml-3"}>Clear</Button>
                </Container>
            </Form>
        </div>
    )
}

export default AddCategory;