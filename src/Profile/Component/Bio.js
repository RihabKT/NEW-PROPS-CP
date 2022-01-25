import React from "react";
import PropTypes from "prop-types";


 function Bio(props){
    return(
     
        <div>
        <p> {props.mybio} </p>
        <p style={{color:"darkRed",textAlign:'center',fontWeight:'bolder',fontFamily:'sans-serif'}}>I'm Rihab ktaifi, i'm 28 years old. currently, i'm studying FULL STACK JS development. <br/>
        Date and place of birth: 05/01/1993 Tunis <br/> 
        Nationality: Tunisian <br/>   
        Address: PO.BOX/2000- Bardo- Tunis <br/> 
        E-mail: rihabktaifi93@gmail.com <br/> 
        Mobile number: (+216) 28810117 <br/> 

          Education: 
          Lisence in IT applied to management. <br/> 
          
          Languages: 

        Arabic, English, French.  
       
          
          </p>
         </div>
    )
}

Bio.defaultProps={
  mybio: "ABOUT ME:"
}

Bio.propTypes={
 mybio:PropTypes.string,
}

export default Bio;