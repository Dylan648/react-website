import '../../App.css'
import HeroSection from '../HeroSection'
import React from 'react';
import Cards from '../Cards';

function Home () {
    return(
    <React.Fragment>
        <HeroSection /> 
        <Cards />
    </React.Fragment>
    )
}

export default Home;