import React from 'react'
import LandingPage from './landingPage'
import NavBar from './nav'
import About from './aboutus'
import Footer from './footer'
export default function Home() {
    return (
        <div className=
        "root">
            {/* <div className="bg"  /> */}
            <NavBar/>
            <LandingPage/>
            <About/>
            <Footer/>

        </div>
    )
}
