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

const Login=()=>{
    useEffect(()=>{
        document.title="Login";
    },[]);
    const [credentials, setCredentials] = useState();
    const [artists, setArtists] = useState();

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
              toast.success("Logged in!",{
                  position: "bottom-center",
          });
              setArtists(response.data)
              console.log(artists)
              if(artists===undefined)
                  localStorage.setItem('type',1);
              else {
                  localStorage.setItem('type', 2);
                  localStorage.setItem('email', artists.email)
                  localStorage.setItem('id', artists.artist_id);
              }
              if(type==1){
                <Admin_Options />
              }
              else
                  <Artists_Options />
          },(error)=>{
              console.log(error);
              toast.error("Something went wrong!",{
                  position: "bottom-center",
              })
          }
      )
};

// async function loginUser(credentials) {
//  return fetch(`${base_url}/login`, {
//    method: 'POST',
//    headers: {
//      'Content-Type': 'application/json'
//    },
//    body: JSON.stringify(credentials)
//  })
//    .then(data => data.json())
// }
//
// export default function Login({ setToken }) {
//   const [username, setUserName] = useState();
//   const [password, setPassword] = useState();
//
//   const handleSubmit = async e => {
//     e.preventDefault();
//     const token = await loginUser({
//       username,
//       password
//     });
//     setToken(token);
//   }
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