import React from "react";


 function MyImage(props){
    return(
        <>
        <div> {props.children} </div> 
        <img src="/Photo.png" className="MyImage" width="130" alt="MyImage"/>
        </>
    )
}

export default MyImage;