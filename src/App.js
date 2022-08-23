import React, {useState, useCallback} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'

import './App.css';
import './media.css'
import Menu from "./Component/Menu/Menu";
import About from "./Component/About/About";
import Header from "./Component/Header/Header";
import Person from "./Component/Persone/Person";
import Portfolio from "./Component/Portfolio/Portfolio";
import Experience from "./Component/Experience/Experience";
import Contact from "./Component/Contact/Contact";
import InfiniteScrollSlide from "./Component/InfiniteScroll/InfiniteScroll";

gsap.registerPlugin(ScrollTrigger)

const App = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = useCallback((show) => {
        setIsOpen(show)
    }, [])

    return (
        <div>
            <Header onOpenMenu={() => toggleMenu(true)}/>
            <Person/>
            <About/>
            <Portfolio/>
            <Experience/>
            <Menu isOpen={isOpen} onClose={() => toggleMenu(false)}/>
            <InfiniteScrollSlide/>
            <Contact/>
        </div>
    );
}

export default App;
