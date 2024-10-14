import Home from './pages/Home';
import HospitalInfo from './components/HospitalInfo';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/hospital/maxsaket' Component={()=><HospitalInfo name='maxsaket'/>}/>
        <Route exact path='/hospital/blkmax' Component={()=><HospitalInfo name='blkmax'/>}/>
        <Route exact path='/hospital/maxdwarka' Component={()=><HospitalInfo name='maxdwarka'/>}/>
        <Route exact path='/hospital/aakash' Component={()=><HospitalInfo name='aakash'/>}/>
      </Routes>
    </>
  )
}

export default App;