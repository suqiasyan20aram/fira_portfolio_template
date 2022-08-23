import React, {useMemo, useEffect} from "react";
import {gsap} from "gsap";

import {data} from '../../data'
import {ReactComponent as MenuIcon} from '../../images/menu-icon.svg'

const Header = ({onOpenMenu}) => {
    const nameAbbr = useMemo(() => {
        return `${data.name[0]}${data.surname[0]}`
    }, [])

    useEffect(() => {
        gsap.to('.header_block', {
            background: "linear-gradient(to right,  #eef2f3, #8e9eab)",
            boxShadow: " 0 2px 40px rgba(74, 27, 0, 0.44)",
            scrollTrigger: {
                trigger: ".header_block",
                scrub: 1,
                start: 'top top',
                end: 'top+=100',
            },
        })
        gsap.to('.logo', {
            color: "#FFFEF8",
            scrollTrigger: {
                trigger: ".logo",
                scrub: 1,
                start: 'top top',
                end: 'top+=100',
            },
        })
        gsap.to('.burger_menu', {
            fill: "#FFFEF8",
            scrollTrigger: {
                trigger: ".burger_menu",
                scrub: 1,
                start: 'top top',
                end: 'top+=100',
            },
        })

        gsap.to('.href', {
            color: "#FFFEF8",
            scrollTrigger: {
                trigger: ".href",
                scrub: 1,
                start: 'top top',
                end: 'top+=100',
            },
        })
    }, [])

    return (
        <div className="header_block">
            <a href="#" style={{textDecoration: "none"}}>
                <h1 className="logo">{nameAbbr}</h1>
            </a>
            <div className="links_block">
                <ul className="links">
                    <li className="link">
                        <a href="#about" className="href">About</a>
                    </li>
                    <li className="link">
                        <a href="#portfolio" className="href">Portfolio</a>
                    </li>
                    <li className="link">
                        <a href="#experience" className="href">Experience</a>
                    </li>
                    <li className="link">
                        <a href="#contact" className="href">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="menu_icon">
                <div onClick={onOpenMenu} style={{height: "30px", width: "30px"}}>
                    <MenuIcon className={'burger_menu'}/>
                </div>
            </div>
        </div>
    )

}
export default Header