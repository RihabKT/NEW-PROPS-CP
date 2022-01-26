import logo from './logo.svg';
import './App.css';
import Component from './Profile/Component';



function App() {
  const HandleAlert=()=> alert ("HELLO!I'M RIHAB KTAIFI")
  return (
    <div className='App'>
    <div className='flex'>

     <Component
     FullName= "RIHAB KTAIFI"
      Bio ="I'm Rihab ktaifi, i'm 28 years old. I have a license diploma in IT applied to management and currently i'm studying FULL STACK JS development.
       Nationality: Tunisian,
       Address: PO.BOX:2000- Bardo- Tunis- TUNISIA,
       E-mail: rihabktaifi93@gmail.com, 
      Mobile number: (+216) 28810117,  Languages: 
     Arabic, English, French ."
      

      Profession="CURRENTLY, I WORK AS A MARKETING OFFICER"
      HandleAlert={HandleAlert}

     >
       <img  src="/Photo.png" width="200" alt="myimage"/>
       
       </Component>

     
     </div>
     </div>
    
  );
}





export default App;
