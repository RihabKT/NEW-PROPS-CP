import React from "react";
import PropTypes from "prop-types";


 function FullName(props){
     
    return(
     < > 
<h1> {props.name} </h1>
<h1 style={{color:'tomato',fontWeight:'bolder',fontSize:'50px',fontFamily:'monospace'}}> RIHAB KTAIFI </h1>

     </>
    )
}

FullName.defaultProps={
    name:"WELCOME TO SEE MY PROFILE!"
}

FullName.propTypes={
    name:PropTypes.string,
}

export default FullName;