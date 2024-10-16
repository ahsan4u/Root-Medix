import Home from './pages/Home';
import HospitalInfo from './components/HospitalInfo';
import {Routes, Route, useLocation} from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import InTreatment from './components/InTreatment';
import GivenTreatments from './components/GivenTreatments';

function App() {
  const {pathname} = useLocation();
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[pathname])

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
      </Routes>
    <Footer/>
    </>
  )
}

export default App;