import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import Mainbody from './Mainbody';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<div style={{backgroundColor:"black", color:"gray"}}>
  <Header coursename="React JS"/>
  <div className='px-4'>
  <Mainbody/>
  </div>
  <Footer/>
  </div>
);

 
