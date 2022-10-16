import React,{useState} from "react";

function Card(props) {
    let favorites=useState("Add to favorites");
    let activeBtnColor=useState("");
    let [btnTextstate,setbtnTextstate]=favorites
    let [activeBtnColorState,setactiveBtnColorState]=activeBtnColor
    // let currentstate=favorites[0];
    // let nextstate=favorites[1];
    function changeState(){
      setbtnTextstate((prevState)=>{
        if(prevState==="Add to favorites"){
          return "Added"
        }
        else{
          return "Add to favorites"
        }
      })
      setactiveBtnColorState((prevState)=>{
        if(prevState=="")
        {
          return "active"
        }else{
          return ""
        }
      })
    }
  return (
    <div className={`card ${activeBtnColorState}`}>
      <img src={props.cardContent.imgSrc} />
      <h3>{props.cardContent.name}</h3>
      <p>Ph : {props.cardContent.phone}</p>
      <p>Email: {props.cardContent.email}</p>
      <button onClick={changeState}>{btnTextstate}</button>
    </div>
  );
}

export default Card;
