//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';

function App() {
  return (
    
    <>
    <Navbar title="TextChanger" aboutText="About Us" />
    <div className='container my-5'>
    <TextArea heading = "Enter the Text below"/>
    </div>
    </>
    
  );
}
 
export default App;
