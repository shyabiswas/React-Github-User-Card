import React from "react";

function Followers(props) {
  return (
    <div className="followers">
      <h1> My GitHub Followers </h1>
      <img src={props.image} alt="avphoto" />
      <div className="url-container">
        <h2>{props.name}</h2>
        <a href={props.html_url} className="url">
         <p>{props.name}'s Github profile </p> 
        </a>
        <p className="bio"> {props.bio}</p>
      </div>
    </div>
  );
}

export default Followers;