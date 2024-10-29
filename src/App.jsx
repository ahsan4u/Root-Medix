import Home from './pages/Home';
import HospitalInfo from './pages/HospitalInfo';
import {Routes, Route, useLocation} from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import InTreatment from './pages/InTreatment';
import GivenCard from './pages/GivenCard';
import TreatmentCard from './components/TreatmentCard';
import DoctorsProfile from './pages/DoctorsProfile';
import TreatmentPage from './pages/TreatmentPage';
import DoctorCard from './components/DoctorCard';

function App() {
  useEffect(()=>{
    window.scrollTo(0, 0);
    document.querySelector('html').style.overflow = 'scroll';
  },[useLocation()])
  
  const hospitals = [ 'maxsaket', 'blkmax', 'maxdwarka', 'aakash', ];
  const doctors = [
    {name: 'anandkumar',        hospital: 'maxsaket'}, {name: 'kumudrai',          hospital: 'maxsaket'}, {name: 'vivekakumar',      hospital: 'maxsaket'},
    {name: 'vivekvasudeo',      hospital: 'maxsaket'}, {name: 'rohitkaushal',      hospital: 'maxsaket'}, {name: 'rayazahmed',       hospital: 'maxsaket'},
    {name: 'pragneshdesai',     hospital: 'maxsaket'}, {name: 'mrigankshekharjha', hospital: 'maxsaket'}, {name: 'samitchaturvedi',  hospital: 'maxsaket'},
    {name: 'sandeepbatra',      hospital: 'maxsaket'}, {name: 'nagendersharma',    hospital: 'maxsaket'}, {name: 'vijaykumarchopra', hospital: 'maxsaket'},
    {name: 'subhashkumarsinha', hospital: 'maxsaket'}, {name: 'colcproy',          hospital: 'maxsaket'}, {name: 'hkagarwal',        hospital: 'maxsaket'},
    {name: 'balbirsingh',       hospital: 'maxsaket'}, {name: 'arvindmdas',        hospital: 'maxsaket'}, {name: 'rajneeshmalhotra', hospital: 'maxsaket'},
    {name: 'mohanbhargava',     hospital: 'maxsaket'}, {name: 'vineetarya',        hospital: 'maxsaket'},
  ];

  return (
    <>
    <Navbar/>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/treatment/cardiology' Component ={()=><InTreatment name={'cardiology'}/>} />
        <Route exact path='/treatment/cardiology/heart-transplant' Component ={()=><TreatmentPage/>} />
        <Route exact path='/treatments' Component = {()=><GivenCard Card={TreatmentCard} data={{hospital: 'maxsaket', content: 'treatments', link: '/data/cards/treatments.json/'}}/>}/>
        <Route exact path='/doctors' Component = {()=><GivenCard Card={DoctorCard} data={{hospital: 'maxsaket', content: 'doctors'}}/>}/>
        { hospitals.map((name, idx)=>(<Route key={idx} exact path={`/hospital/${name}`} Component={()=><HospitalInfo name={name}/>}/>)) }
        {doctors.map((dr, idx)=> (
          <Route key={idx} exact path={`/${dr.hospital}/best-doctors/doctor/${dr.name}`} Component={()=><DoctorsProfile doctor={{name: dr.name, hospital: dr.hospital}}/>} />
        ))}
      </Routes>
    <Footer/>
    </>
  )
}

export default App;