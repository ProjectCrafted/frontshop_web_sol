import React from 'react';
import './App.css';
import BackgroundSlider from "./Components/Sliders/LandingPage/backgroundslider.component";
import Navbar from "./Components/Navbar/navbar.component";
import Homecard01Componenet from "./Components/cards/homepagecard1/homecard01.componenet";
import Fetcher from "./Components/Sliders/PageCourosel/caurosel1fetch.component";
import Productslide from "./Components/Sliders/ProductDisplay/prouctslide.component";
function App() {
    return (
        <div className='App'>
                <Navbar/>
                <BackgroundSlider/>
            <Homecard01Componenet/>
            <Fetcher/>
            <Productslide/>
            <div>

            </div>
        </div>
    );
}

export default App;
