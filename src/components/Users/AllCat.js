import React, { useState, useEffect } from 'react';
import Cat from "./Cat";
import {Button} from "reactstrap";
import base_url from "../../api/bootapi";
import axios from "axios";
import {toast} from 'react-toastify';
import { withRouter } from "react-router-dom";

const AllCat = (props) => {

    useEffect(() => {
        document.title = "all categories";
    }, []);

    const back=()=>{
        let path='/Explore';
        props.history.push(path);
    }
    //function to call server;
    const getAllCategoriesFromServer = () => {
        axios.get(`${base_url}/categories`).then(
            (response) => {
                console.log(response.data);
                toast.success("categories has been loaded", {
                    position: "bottom-center",
                });
                setCategories(response.data);
            },
            (error) => {
                console.log(error);
                toast.error("something went wrong", {position: "bottom-center",}
                );
            }
        )
    }

    useEffect(() => {
        getAllCategoriesFromServer()
    }, []);

    const [categories, setCategories] = useState([])



    return (
        <div>

            <h1>All Categories</h1>
            <p>list of categories are given:</p>
            {
                categories.length > 0
                    ? categories.map((item) => <Cat key={item.category_id} cat={item}/>)
                    : "No categories"
            }
<Button onClick={back}>Back</Button>
        </div>
    );
};

export default withRouter(AllCat);