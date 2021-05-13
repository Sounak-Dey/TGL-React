import React, { useState,useEffect } from 'react';
import axios from 'axios';
import avatar from './avatar.svg'
import wavei from './wave.png'
import gb from './gift-box.png'
import base_url from "../../api/bootapi";
import {toast} from "react-toastify";
import Admin_Options from "../Admin/Admin-Options";
import Artists_Options from "../Artist/Artists-Options";
import Register from "../Artist/Register";
import Explore from "../Users/Explore";
import { Link } from 'react-router-dom';

const Login=()=>{
    useEffect(()=>{
        document.title="Login";
        localStorage.clear();
    },[]);
    const [credentials, setCredentials] = useState();
    const [artist,setArtist] = useState({});
    //form handler function
    const handleSubmit=(e)=>{
        console.log(credentials);
        postData(credentials);
        e.preventDefault();

    };

    //creating function to post data
    const postData=(data)=>{
      axios.post(`${base_url}/login`,data).then(
          (response)=>{
              console.log(response);
              console.log(response.data);
            if(response.data == ""){ 
              toast.error("Invalid username and password, No such user exists",{
                position : "bottom-center",
              });}
            else if(response.data.type === 1){
                  localStorage.setItem('type',1);
                  toast.success("Admin Logged in!",{
                    position: "bottom-center",
            });}
            else if(response.data.type === 2) {
                  localStorage.setItem('type', 2);
                  localStorage.setItem('email', response.data.username);
                  toast.success("Artist Logged in!",{
                    position: "bottom-center",
            });
                 // localStorage.setItem('id', response.data.artist_id);
                //  var email = localStorage.getItem("username")
                //  axios.get( `${base_url}/artists/${email}`).then(
                //   (response)=>{
                //     console.log(response.data);
                //     setArtist(response.data);
                //     console.log(artist);
                // },
                // (error)=>{
                //     console.log(error);
                // }
                // )
              }
              // else if(response.data.type == "undefined"){
              //   toast.error("Invalid username and password, No such user exists");
              // }
          },(error)=>{
              console.log(error);
              toast.error("Something went wrong!",{
                  position: "bottom-center",
              })
          }
      )
};

const type =localStorage.getItem('type')
  return(
    <div> 
     
      <body>
      
          <img className="wave" src={wavei}/>
          <div className="container">
              <div className="img">
                <img src = {gb} />
              </div>
              <div className="login-content">
                <form onSubmit={handleSubmit}>
                  <img src={avatar}/>
                  <h2 className="title">Welcome</h2>
                        <div className="input-div one">
                          <div className="i">
                              <i className="fas fa-user"></i>
                          </div>
                          <div className="div">
                              <input type="text" placeholder=" Username" onChange={(e) => setCredentials({...credentials,username:e.target.value})} className="input"/>
                          </div>
                        </div>
                        <div className="input-div pass">
                          <div className="i"> 
                              <i className="fas fa-lock"></i>
                          </div>
                          <div className="div">    
                              <input type="password" placeholder="Password" onChange={(e) => setCredentials({...credentials,password:e.target.value})} className="input"/>
                          </div>
                        </div>
                        <input type="submit" className="btn" value="Login"/>
                        <input type="button" className="btn" value="Explore"/>
                    <input type="button" className="btn" value="Register"/>
                      </form>
                  </div>
            </div>

      </body>
      {/* <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      </div> */}
    </div>
    

  )
}

// Login.propTypes = {
//   setCredentials: PropTypes.func.isRequired
// };

export default Login;