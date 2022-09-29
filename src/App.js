import React, {useState, useCallback} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'

import './App.css';
import Menu from "./Component/Menu/Menu";
import Cube from "./Component/Cube/Cube";
import About from "./Component/About/About";
import Header from "./Component/Header/Header";
import Person from "./Component/Persone/Person";
import Contact from "./Component/Contact/Contact";
import Portfolio from "./Component/Portfolio/Portfolio";
import Experience from "./Component/Experience/Experience";

gsap.registerPlugin(ScrollTrigger)

const App = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = useCallback((show) => {
        setIsOpen(show)
    }, [])

    return (
        <div>
            <Header onOpenMenu={() => toggleMenu(true)}/>
            <Menu isOpen={isOpen} onClose={() => toggleMenu(false)}/>
            <Person/>
            <Cube/>
            <About/>
            <Portfolio/>
            <Experience/>
            <Contact />
        </div>
    );
}

export default App;
