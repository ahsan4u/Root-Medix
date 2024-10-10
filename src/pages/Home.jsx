import React from "react";
import Navbar from '../components/Navbar';
import Poster from '../components/Poster';
import Treatment from "../components/Treatment";
import BestHospital from "../components/BestHospital";
import OurServices from "../components/OurServices";

function Home() {

    return (
        <>
            <Navbar/>
            <Poster/>
            <Treatment/>
            <BestHospital/>
            <OurServices/>
        </>
    )
}

export default Home;