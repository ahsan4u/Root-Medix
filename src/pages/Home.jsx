import React from "react";
import Topbar from '../components/Topbar';
import Navbar from '../components/navbar';
import Poster from '../components/Poster';
import Treatment from "../components/Treatment";
import BestHospital from "../components/bestHospital";

function Home() {

    return (
        <>
            <Topbar/>
            <Navbar/>
            <Poster/>
            <Treatment/>
            <BestHospital/>
        </>
    )
}

export default Home;