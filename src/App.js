import './App.css';
import React from 'react';
import {ToastContainer,toast} from "react-toastify";
import Header from "./components/header";
import AllArtists from "./components/AllArtists";
import Artists_Options from "./components/Artists-Options";
import {Col, Container, Row} from "reactstrap";
import Home from "./components/home";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import AllCategories from "./components/AllCategory";
import AddCategory from "./components/AddCategory"
import AddProduct from "./components/AddProduct";
import AllProducts from "./components/AllProducts";
import Admin_Options from "./components/Admin-Options";
import AllCategoryRequests from "./components/AllCategoryRequests";
import MyProfile from "./components/MyProfile";
import UpdateProfile from "./components/UpdateProfile";
import AllArtistProducts from "./components/AllArtistProducts";
import AllCategoryProducts from "./components/AllCategoryProducts";
import Login from "./components/Login/Login";
import Register from "./components/Register";
import AddArtist from "./components/AddArtist";
import UpdatePassword from "./components/UpdatePassword";
import Fn from './components/TestImage.js';
import Func from './components/testfn';

function App() {

  return(

     <div>
         {/* <Fn/> */}
         {/* <Func /> */}

         <Router>
         <ToastContainer />
         <Container>
             {/* <Header /> */}
             {/*<Route exact path='/' component={ManagerDashboard}>*/}
             {/*</Route>*/}
             <Route exact path="/Login" component={Login}/>
             <Route exact path='/Register' component={Register}/>

             <Row>
                 <Col md={4}>
                     <Route path={'/Admin-Options'} component={Admin_Options}/>
                     <Route path={'/Artists-Options'} component={Artists_Options}/>
                 </Col>
                 <Col md={8}>
                     <Route path={'/Admin-Options/all-artists'} component={AllArtists} exact/>
                     <Route path={'/Admin-Options/add-artist'} component={AddArtist} exact/>
                     <Route path={'/Admin-Options/add-category'} component={AddCategory} exact/>
                     <Route path={'/Admin-Options/all-categories'} component={AllCategories} exact/>
                     <Route path={'/Admin-Options/all-category-requests'} component={AllCategoryRequests} exact/>
                     <Route path={'/Admin-Options/all-products'} component={AllProducts} exact/>

                     <Route path={'/Artists-Options/my-profile'} component={MyProfile} exact/>
                     <Route path={'/Artists-Options/add-product'} component={AddProduct} exact/>
                     <Route path={'/Artists-Options/all-products'} component={AllArtistProducts} exact/>
                     <Route path={'/Artists-Options/update-profile'} component={UpdateProfile} exact/>
                     <Route path={'/Artists-Options/update-password'} component={UpdatePassword} exact/>

                     <Route path={'/User-Options/all-artists'} component={AllArtists} exact/>
                     <Route path={'/User-Options/all-products'} component={AllProducts} exact/>
                     <Route path={'/User-Options/all-categories'} component={AllCategories} exact/>
                     <Route path={'/User-Options/all-artist-products'} component={AllArtistProducts} exact/>
                     <Route path={'/User-Options/all-category-products'} component={AllCategoryProducts} exact/>
                     <Route path={'/User-Options/artist-profile'} component={MyProfile} exact/>

                 </Col>
             </Row>
         </Container>
         </Router>
     </div>

  );
 }

export default App;
