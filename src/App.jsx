
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import './App.css'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SideCart from './components/SideCart/SideCart';

function App() {
  const [watchTime,setwatchTime] = useState('');

  const handleWatchTime = (time)=>{
   const previousWatchTime = JSON.parse(localStorage.getItem('WatchTime'));

   if(previousWatchTime){
    const SumWatchTime = previousWatchTime + time;
    localStorage.setItem("WatchTime" , SumWatchTime);
    setwatchTime(SumWatchTime);
    
   }
   else{
      localStorage.setItem('WatchTime' ,time);
      setwatchTime(time);
   }
  }


  return (
    <div className=" ">
       <div className='header m-auto mb-3'>
          <Header></Header>
      </div>
      <div className='main-container container m-auto  row '>
        <div className='home-container col-md-8   '>
          <Home handleWatchTime={handleWatchTime}></Home>

        </div>
        <div className='sideCart-container col-md-4  card'>
          <SideCart watchTime={watchTime}></SideCart>

        </div>

      </div>
   <ToastContainer></ToastContainer>
      
    </div>
  )
}

export default App
