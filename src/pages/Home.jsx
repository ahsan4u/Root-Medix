import React from "react";
import Topbar from '../components/Topbar';
import Navbar from '../components/navbar';
import Poster from '../components/Poster';
import Treatment from "../components/Treatment";

function Home() {

    return (
        <>
            <Topbar/>
            <Navbar/>
            <Poster/>
            <Treatment/>
        </>
    )
}

export default Home;