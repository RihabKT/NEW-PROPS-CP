import React from "react";
import PropTypes from "prop-types";



 function Profession(props){
    return(
        <>
<p> {props.myprofession} </p>
<h4 style={{color:"palevioletred",fontWeight:'bolder',fontSize:'25px'}}> CURRENTLY: I'm working as a MARKETING OFFICER </h4>
        </>

    )
}

Profession.defaultProps={
    myprofession:"MY PROFESSION:"
}

Profession.propTypes={
    myprofession:PropTypes.string,
}

export default Profession;