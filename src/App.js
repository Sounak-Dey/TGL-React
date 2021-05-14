import './App.css';
import React from 'react';
import {ToastContainer,toast} from "react-toastify";
import {Col, Container, Row} from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Admin_Options from "./components/Admin/Admin-Options";
import AddCategory from "./components/Admin/AddCategory";
import AllArtists from "./components/Admin/AllArtists";
import AllProducts from "./components/Admin/AllProducts";
import AllCategory from "./components/Admin/AllCategory";
import AllCategoryRequests from "./components/Admin/AllCategoryRequests";
import MyProfile from "./components/Artist/MyProfile";
import AllArtistProducts from "./components/Artist/AllArtistProducts";
import Explore from "./components/Users/Explore";
import UpdatePassword from "./components/Artist/UpdatePassword";
import UpdateProfile from "./components/Artist/UpdateProfile";
import Register from "./components/Artist/Register";
import Login from "./components/Login/Login";
import Artists_Options from "./components/Artist/Artists-Options"
import AddProduct from './components/Artist/AddProduct';
import AddCategoryRequest from './components/Users/AddCategoryRequest';
import AllArt from './components/Users/AllArt';
import AllCat from './components/Users/AllCat'
import AllProd from './components/Users/AllProd';

function App() {

  return(

     <div>

         <Router>
    
    
             <Route exact path='/' component={Login}/>
            
             <Route exact path="/Login" component={Login}/>
             <Route exact path='/Register' component={Register}/>
             <Route exact path='/Explore' component={Explore}/>

             <Row className='m-5' >
                 <Col md={4}>
                     <Route path={'/Admin-Options'} component={Admin_Options}/>
                     <Route path={'/Artists-Options'} component={Artists_Options}/>
                    

                 </Col>
                 <Col md={8}>
                     <Route path={'/Admin-Options/all-artists'} component={AllArtists} exact/>
                
                     <Route path={'/Admin-Options/add-category'} component={AddCategory} exact/>
                     <Route path={'/Admin-Options/all-categories'} component={AllCategory} exact/>
                     <Route path={'/Admin-Options/all-category-requests'} component={AllCategoryRequests} exact/>
                     <Route path={'/Admin-Options/all-products'} component={AllProducts} exact/>

                     <Route path={'/Artists-Options/my-profile'} component={MyProfile} exact/>
                     <Route path={'/Artists-Options/all-products'} component={AllArtistProducts} exact/>
                     <Route path={'/Artists-Options/update-profile'} component={UpdateProfile} exact/>
                     <Route path={'/Artists-Options/update-password'} component={UpdatePassword} exact/>
                     <Route path={'/Artists-Options/add-product'} component={AddProduct} exact/>

                     
                    
                 </Col>
             </Row>

                     <Route path={'/all-artists'} component={AllArt} exact/>
                     <Route path={'/all-products'} component={AllProd} exact/>
                     <Route path={'/all-categories'} component={AllCat} exact/>
                     <Route path={'/add-category-request'} component={AddCategoryRequest} exact/>
    
         </Router>
     </div>

  );
 }

export default App;
