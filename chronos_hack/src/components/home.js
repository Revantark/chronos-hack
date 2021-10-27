import React from 'react'
import LandingPage from './landingPage'
import NavBar from './nav'
import About from './aboutus'
import Footer from './footer'
import Features from './features'
export default function Home() {
    return (
        <div className=
        "root">
            <img className="revLovesDarlene" src="https://images.unsplash.com/photo-1552432441-f626512f675b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1331&q=80" alt="" />
            <NavBar/>
            <LandingPage/>
            <About/>
            <Features/>
            <Footer/>

        </div>
    )
}
