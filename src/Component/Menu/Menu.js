import React, {useMemo} from "react";
import classNames from "classnames";

import classes from './Menu.module.scss'

const Menu = ({isOpen, onClose}) => {
    return (
        <div className={classNames([classes.menu, {[classes.show]: isOpen}])}>
            <span
                onClick={onClose}
                className={classes.close}>
                &times;
            </span>
            <ul className={classes.links}>
                <li className={classes.link}>
                    <a href="#about" className={classes.linkInner} onClick={onClose}>About</a>
                </li>
                <li className={classes.link}>
                    <a href="#portfolio" className={classes.linkInner} onClick={onClose}>Portfolio</a>
                </li>
                <li className={classes.link}>
                    <a href="#experience" className={classes.linkInner} onClick={onClose}>Experience</a>
                </li>
                <li className={classes.link}>
                    <a href="#contact" className={classes.linkInner} onClick={onClose}>Contact</a>
                </li>
                <li className={classes.link}>
                    <a href="#contact2" className={classes.linkInner} onClick={onClose}>Contact</a>
                </li>
            </ul>
        </div>
    )
}
export default Menu
