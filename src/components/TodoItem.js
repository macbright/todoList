import  React from 'react';

import StyleSwitch from "./styledSwitch"



export default function Todo({ id, task, complete }) {

  return (
    <div  style={{display: "flex"}}>
        <p style={{textDecoration: complete ? "line-through": "", color: "white"}}> {task} </p>
       <div style={{marginLeft: "auto"}}> <StyleSwitch id={id} complete={complete} /> </div>
    </div>
  );
}


