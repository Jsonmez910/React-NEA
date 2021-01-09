import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from '../Cards'
import Footer from '../Footer'
import RandomRecipes from '../RandomRecipes'
import Navbar from '../Navbar'


function Home() {


    return (
        <>
            <Navbar/>
            <HeroSection/>
            <RandomRecipes/>
        </>
    );
}

export default Home;