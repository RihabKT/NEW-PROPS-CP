import React from "react";
import PropTypes from "prop-types";


 function HandleAlert(props){
   return(

<button className="btn btn-outline-danger" onClick={()=>alert("HELLO! I'M RIHAB KTAIFI")}> CLICK HERE </button>
   )
   
}


HandleAlert.propTypes={
HandleAlert:PropTypes.func.isRequired,
}



export default HandleAlert;
