import Home from './pages/Home';
import HospitalInfo from './pages/HospitalInfo';
import {Routes, Route, useLocation} from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import InTreatment from './pages/InTreatment';
import GivenTreatments from './pages/GivenTreatments';
import DoctorsProfile from './pages/DoctorsProfile';

function App() {
  useEffect(()=>{
    window.scrollTo(0, 0);
    document.querySelector('html').style.overflow = 'scroll';
  },[useLocation()])

  return (
    <>
    <Navbar/>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/hospital/maxsaket' Component={()=><HospitalInfo name='maxsaket'/>}/>
        <Route exact path='/hospital/blkmax' Component={()=><HospitalInfo name='blkmax'/>}/>
        <Route exact path='/hospital/maxdwarka' Component={()=><HospitalInfo name='maxdwarka'/>}/>
        <Route exact path='/hospital/aakash' Component={()=><HospitalInfo name='aakash'/>}/>
        <Route exact path='/treatment/cardiology' Component ={()=><InTreatment name={'cardiology'}/>} />
        <Route exact path='/giventreatments' Component = {()=><GivenTreatments type={'all'}/>}/>
        <Route exact path='/max-hospital-saket/best-doctors/doctor/anandkumar' Component={()=><DoctorsProfile doctor={{name: 'anandkumar', hospital: 'maxsaket'}}/>} />
        <Route exact path='/max-hospital-saket/best-doctors/doctor/kumudrai' Component={()=><DoctorsProfile doctor={{name: 'kumudrai', hospital: 'maxsaket'}}/>} />
        <Route exact path='/max-hospital-saket/best-doctors/doctor/vineetarya' Component={()=><DoctorsProfile doctor={{name: 'vineetarya', hospital: 'maxsaket'}}/>} />
        <Route exact path='/max-hospital-saket/best-doctors/doctor/vivekakumar' Component={()=><DoctorsProfile doctor={{name: 'vivekakumar', hospital: 'maxsaket'}}/>} />
        <Route exact path='/max-hospital-saket/best-doctors/doctor/vivekvasudeo' Component={()=><DoctorsProfile doctor={{name: 'vivekvasudeo', hospital: 'maxsaket'}}/>} />
        <Route exact path='/max-hospital-saket/best-doctors/doctor/rohitkaushal' Component={()=><DoctorsProfile doctor={{name: 'rohitkaushal', hospital: 'maxsaket'}}/>} />
        <Route exact path='/max-hospital-saket/best-doctors/doctor/rayazahmed' Component={()=><DoctorsProfile doctor={{name: 'rayazahmed', hospital: 'maxsaket'}}/>} />
        <Route exact path='/max-hospital-saket/best-doctors/doctor/pragneshdesai' Component={()=><DoctorsProfile doctor={{name: 'pragneshdesai', hospital: 'maxsaket'}}/>} />
        <Route exact path='/max-hospital-saket/best-doctors/doctor/mrigankshekharjha' Component={()=><DoctorsProfile doctor={{name: 'mrigankshekharjha', hospital: 'maxsaket'}}/>} />
        <Route exact path='/max-hospital-saket/best-doctors/doctor/samitchaturvedi' Component={()=><DoctorsProfile doctor={{name: 'samitchaturvedi', hospital: 'maxsaket'}}/>} />
        <Route exact path='/max-hospital-saket/best-doctors/doctor/sandeepbatra' Component={()=><DoctorsProfile doctor={{name: 'sandeepbatra', hospital: 'maxsaket'}}/>} />
        <Route exact path='/max-hospital-saket/best-doctors/doctor/nagendersharma' Component={()=><DoctorsProfile doctor={{name: 'nagendersharma', hospital: 'maxsaket'}}/>} />
        <Route exact path='/max-hospital-saket/best-doctors/doctor/vijaykumarchopra' Component={()=><DoctorsProfile doctor={{name: 'vijaykumarchopra', hospital: 'maxsaket'}}/>} />
        <Route exact path='/max-hospital-saket/best-doctors/doctor/subhashkumarsinha' Component={()=><DoctorsProfile doctor={{name: 'subhashkumarsinha', hospital: 'maxsaket'}}/>} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App;