import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';
import axios from "axios";
import base_url from "../../api/bootapi";
import {toast} from "react-toastify";

const Category=({ category,update })=>{

    const [image, setImage] = useState('');
    
    useEffect(() => {
        fetchCategoryImage(category.category_id)
    },[]);

    const fetchCategoryImage = (category_id ) => {
        if (category_id !== null) {
            axios.get(`${base_url}/category/image/${category_id}`, { responseType: 'blob' }).then(
                response => {
                if (response.data) {
                    setImage(URL.createObjectURL(response.data))
                } else {

                }
            }).catch(error => {
                console.log("Error", error);
            })
        }
    }

    const deleteCategory=(category_id)=>{
        axios.delete(`${base_url}/categories/${category_id}`).then(
            (response)=>{
                toast.success("category deleted",{position: "bottom-center" });
                update(category_id);
            },
            (error)=>{
                toast.error("Something went wrong!",{position: "bottom-center" });
            }
        )
    };


    
    return(
        <Card>
            <CardImg top width="100%" src = {image} alt="Card image cap" />
            <CardBody className="text-center">
                <CardTitle className="font-weight-bold">{category.name}</CardTitle>
                <CardText>{category.about}</CardText>
                <Container>
                    <Button color={"primary"}>Select</Button>
                    <Button color={"danger"}
                            onClick={()=>{
                                deleteCategory(category.category_id);
                            }}>Delete</Button>
                </Container>
            </CardBody>
        </Card>
    )
}


export default Category;