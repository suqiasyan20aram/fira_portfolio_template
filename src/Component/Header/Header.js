import React, {useMemo, useEffect} from "react";

import classes from './Header.module.css'
import {data} from '../../data'
import {ReactComponent as MenuIcon} from '../../images/menu-icon.svg'

const Header = ({onOpenMenu}) => {
    const nameAbbr = useMemo(() => {
        return `${data.name[0]}${data.surname[0]}`
    }, [])

    return (
        <div className={classes.headerSection}>
            <a href="#" style={{textDecoration: "none"}}>
                <svg width={100} height={50} viewBox="0 0 45 45" className={classes.headerLogo}>
                    <text x="50%" y="50%" dy=".35em" textAnchor="middle" className={classes.headerLogoText}>
                        {nameAbbr}
                    </text>
                </svg>
            </a>
            <div className={classes.linksBox}>
                <ul className={classes.links}>
                    <li className={classes.linkWrapper}>
                        <a href="#about" className={classes.link}>About</a>
                    </li>
                    <li className={classes.linkWrapper}>
                        <a href="#portfolio" className={classes.link}>Portfolio</a>
                    </li>
                    <li className={classes.linkWrapper}>
                        <a href="#experience" className={classes.link}>Experience</a>
                    </li>
                    <li className={classes.linkWrapper}>
                        <a href="#contact" className={classes.link}>Contact</a>
                    </li>
                </ul>
            </div>
            <div onClick={onOpenMenu} className={classes.burgerMenuWrapper}>
                <MenuIcon className={classes.burgerMenu}/>
            </div>
        </div>
    )

}
export default Header
