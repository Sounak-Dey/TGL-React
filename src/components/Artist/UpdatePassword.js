import React, {useEffect , useState} from 'react'
import axios from "axios";
import base_url from "../../api/bootapi";
import {toast} from "react-toastify";
import {Button, Container, Form, FormGroup} from "reactstrap";

const UpdatePassword=()=>{
    useEffect(()=>{
        document.title="Update Password";
    },[]);

    const email2 = localStorage.getItem('email');
    const [user,setUser]=useState({email:email2});

    //form handler
    const handleForm=(e)=>{
        console.log(user);
        postDatatoServer(user);
        e.preventDefault();
    };

    const postDatatoServer= (data) => {
        axios.post( `${base_url}/password`,data).then(
            (response)=>{
                console.log(response);
                if(response.data == "Success")
                    toast.success("Updated!",{
                    position: "bottom-center",
                });
                else if(response.data == "Old password does not match"){toast.error("Old password does not match!",{
                    position: "bottom-center",
                })}
                else if(response.data == " Confirm password does not match"){toast.error(" Confirm password does not match",{
                    position: "bottom-center",
                })}
               
                else {toast.error("Something went wrong!",{
                    position: "bottom-center",
                })}
            },(error)=>{
                console.log(error);
            }
        )
    };

    return (
        <div>
            <h1 className={"text-center"}> Fill the details : </h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="username">Enter Old Password:</label><br/>
                    <input
                        type={"password"}
                        id={"oldPassword"}
                        placeholder={"Type Old Password"}
                        onChange={(e)=>{
                            setUser({...user,old: e.target.value})
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="password">Enter new Password:</label>
                    <input
                        type={"password"}
                        id={"newPassword"}
                        placeholder={"Type New Password"}
                        onChange={(e)=>{
                            setUser({...user,newp: e.target.value})
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <label for="password">Confirm new Password:</label>
                    <input
                        type={"password"}
                        id={"newPassword2"}
                        placeholder={"Re-Type New Password"}
                        onChange={(e)=>{
                            setUser({...user,newp2: e.target.value})
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

export default UpdatePassword;