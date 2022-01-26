import React from "react";
import PropTypes from 'prop-types';


 function Component(props){
     
    return(
     < > 
<h1 style={{color:"tomato",fontWeight:"bolder",fontFamily:"monospace",fontSize:"80px"}}> {props.FullName} </h1>
<p style={{color:"darkred",textAlign:"center",fontWeight:"bolder",fontFamily:"sans-serif",fontSize:"20px"}}> {props.Bio} </p>
<h4 style={{color:"palevioletred",fontWeight:"bold"}}> {props.Profession} </h4>

<div className="newflex">
<div>{props.children}</div>
<button className="btn btn-outline-danger" onClick={()=>props.HandleAlert()}> CLICK HERE </button>

</div>
     </>
    )
}


Component.defaultProps = {
 FullName : "WELCOME TO SEE MY PROFILE!",
     };
     
     
     Component.propTypes={
       FullName:PropTypes.string,
        Bio:PropTypes.string,
       Profession:PropTypes.string,
       HandleAlert:PropTypes.func.isRequired,
        }


export default Component;