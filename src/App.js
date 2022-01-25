import logo from './logo.svg';
import './App.css';
import FullName from './Profile/Component/FullName';
import Bio from './Profile/Component/Bio';
import Profession from './Profile/Component/Profession';
import MyImage from './Profile/Component/MyImage';
import  HandleAlert from './Profile/Component/HandleAlert';



function App() {
  return (
    <div className='App'>
    <div className='flex'>

     <FullName/>
     <Bio/>
     <Profession/>
     </div>


     <div className='newflex'>
     <MyImage/>
     <HandleAlert/>

     </div>
     </div>
  );
}





export default App;
