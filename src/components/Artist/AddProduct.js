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
    console.log(id);
    const [product,setProduct]=useState({art_id : id});
    var [photo, setPhoto] = useState(null);

    //form handler function
    const handleForm=(e)=>{
        console.log(product);
        console.log(typeof(product.cate_id))
        console.log(typeof(product.price))
        postDatatoServer(product);
        e.preventDefault();
    };

    // image handler
    const uploadImage = (event) => {

        setPhoto(event.target.files[0]);
        console.log(photo);

    }
      
    // art_id: null
    // cate_id: 1
    // description: "asdsa"
    // name: "Wallpaper"
    // price: "100"

    //creating function to post data
    const postDatatoServer= (data) => {
        console.log(photo);
        console.log(product);
        const formData = new FormData();
        formData.append('file', photo);
        formData.append('artistId', data['art_id']);
        formData.append('categoryId', data['cate_id']);
        formData.append('description', data['description']);
        formData.append('name', data['name']);
        formData.append('price', data['price']);
        
        axios.post( `${base_url}/products`,formData).then(
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
            <Form onSubmit={handleForm} >
                <FormGroup className='m-5' >
                    <label for="photo">Set Image : </label><br/>
                    <input 
                        type='file'  
                        id="file-upload"   
                        accept="image/png, image/jpeg" 
                        onChange = {uploadImage}
                    />
                </FormGroup>
                <FormGroup className='m-5' >
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
                <FormGroup className='m-5' >
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
             <FormGroup className='m-5' >
                        <label >Select Category:</label><br/>
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

                <FormGroup className='m-5' >
                    <label for="description" >Enter Description:</label><br/>
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