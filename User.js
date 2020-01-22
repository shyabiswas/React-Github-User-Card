  
import React from "react";

const User=(props)=>{
  return(
    <div>
    <img src={props.user.avatar_url} alt= "avatar"/>>
    <h2>{props.user.name}</h2>
    <a href={props.user.html_url} alt="url"> My Github Profile</a>
    <p className="bio">{props.user.bio}</p>
   </div>
  )
}


export default User;