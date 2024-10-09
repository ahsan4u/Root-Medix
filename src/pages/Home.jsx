import React from "react";
import Navbar from '../components/Navbar';
import Poster from '../components/Poster';
import Treatment from "../components/Treatment";
import BestHospital from "../components/BestHospital";

function Home() {

    return (
        <>
            <Navbar/>
            <Poster/>
            <Treatment/>
            <BestHospital/>
        </>
    )
}

export default Home;