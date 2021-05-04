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
import AllCategoryProducts from "./components/Users/AllCategoryProducts";
import Explore from "./components/Users/Explore";
import Portfolio from "./components/Users/Portfolio";
import UpdatePassword from "./components/Artist/UpdatePassword";
import UpdateProfile from "./components/Artist/UpdateProfile";
import Register from "./components/Artist/Register";
import Login from "./components/Login/Login";



import Fn from './components/TestImage.js';
import Func from './components/testfn';
import Artists_Options from "./components/Artist/Artists-Options"
import AddProduct from './components/Artist/AddProduct';
import AddCategoryRequest from './components/Users/AddCategoryRequest';
import User_Options from './components/Users/User-Options';

function App() {

  return(

     <div>
         {/* <Fn/> */}
         {/* <Func /> */}

         <Router>
         <ToastContainer />
         <Container>
             {/*<Route exact path='/' component={ManagerDashboard}>*/}
             {/*</Route>*/}
             <Route exact path="/Login" component={Login}/>
             <Route exact path='/Register' component={Register}/>

             <Row>
                 <Col md={4}>
                     <Route path={'/Admin-Options'} component={Admin_Options}/>
                     <Route path={'/Artists-Options'} component={Artists_Options}/>
                     <Route path={'/Explore'} component={Explore} exact/>
                     <Route path={'/Portfolio'} component={Portfolio} exact/>
                     <Route path={'/User-Options'} component={User_Options} exact/>

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

                     <Route path={'/User-Options/all-artists'} component={AllArtists} exact/>
                     <Route path={'/User-Options/all-products'} component={AllProducts} exact/>
                     <Route path={'/User-Options/all-categories'} component={AllCategory} exact/>
                     <Route path={'/User-Options/all-artist-products'} component={AllArtistProducts} exact/>
                     <Route path={'/User-Options/all-category-products'} component={AllCategoryProducts} exact/>
                     <Route path={'/User-Options/artist-profile'} component={MyProfile} exact/>
                     <Route path={'/User-Options/add-category-request'} component={AddCategoryRequest} exact/>
                    
                 </Col>
             </Row>
         </Container>
         </Router>
     </div>

  );
 }

export default App;
