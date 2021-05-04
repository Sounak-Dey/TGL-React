import React, {useEffect , useState} from 'react'
import {Button, Form, FormGroup, Label, Input, FormText, Container} from 'reactstrap';
import axios from "axios";
import base_url from "../../api/bootapi";
import {toast} from 'react-toastify';

const AddProduct=()=>{

    const [categories,setCategories]=useState([]);

    useEffect(() => {
        document.title="add product";
        axios.get(`${base_url}/categories`).then(
            (response) => {
                const category =response.data;
                console.log(category);
                setCategories(category);
                console.log(categories)
            })
    },[]);

    const id = localStorage.getItem('id');
    const [product,setProduct]=useState({art_id : id});
    

    //form handler function
    const handleForm=(e)=>{
        console.log(product);
        postDatatoServer(product);
        e.preventDefault();
    };

    //creating function to post data
    const postDatatoServer= (data) => {
        axios.post( `${base_url}/products`,data).then(
            (response)=>{
                console.log(response);
                toast.success("Product added!",{
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
                        name={"productname"}
                        id={"name"}
                        onChange={(e)=>{
                            setProduct({...product,name: e.target.value})
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="price">Enter Price:</label><br/>
                    <input
                        type={"text"}
                        placeholder={"price"}
                        name={"productprice"}
                        id={"price"}
                        onChange={(e)=>{
                            setProduct({...product,price: e.target.value})
                        }}
                    />
                </FormGroup>
                {/*dropdown having all category names as options*/}
             <FormGroup>
                        <Input
                           type={"select"} name="select" id={"category-select"} onChange={(e)=>{
                               const categoryname = e.target.value;
                               for(var i=0;i<categories.length;i++){
                                   var obj = categories[i];

                                   if(obj.name == categoryname){
                                       setProduct({...product,cate_id:obj.category_id})
                                   }
                               }
                           }}>
                            <option>[Select one]</option>
                            {categories.map(person => <option>{person.name}</option>)}

                           </Input>


             </FormGroup>

                <FormGroup>
                    <label for="description">Enter Description:</label>
                    <input
                        type={"textarea"}
                        placeholder={"description"}
                        name={"productdescription"}
                        id={"description"}
                        style={{height:150}}
                        onChange={(e)=>{
                            setProduct({...product,description: e.target.value})
                        }}
                    />
                </FormGroup>

                <Container className={"text-center"}>
                    <Button type="submit" color={"success"}>Add Product</Button>
                    <Button
                        type="reset"
                        color={"warning ml-3"}>Clear</Button>
                </Container>
            </Form>
        </div>
    )
}

export default AddProduct;