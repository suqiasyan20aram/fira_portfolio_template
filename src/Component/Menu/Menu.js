import {useMemo} from "react";
import close_icon from "../../images/close-button.png"

const Menu = ({isOpen, onClose}) => {
    const className = useMemo(()=>{
        const cls = ['menu_block'];
        !!isOpen && cls.push('show');

        return cls.join(' ');
    },[isOpen])

    return(
        <div className={className}>
            <div className="closing">
                <button
                    onClick={onClose}
                    className="close_button">
                    X
                </button>
            </div>
            <div className="menu_links_block">
                <ul className="links">
                    <li className="link">
                        <a href="#about" className="href" onClick={onClose}>About</a>
                    </li>
                    <li className="link">
                        <a href="#portfolio" className="href" onClick={onClose}>Portfolio</a>
                    </li>
                    <li className="link">
                        <a href="#experience" className="href" onClick={onClose}>Experience</a>
                    </li>
                    <li className="link">
                        <a href="#contact"  className="href contact_hide" onClick={onClose}>Contact</a>
                    </li>
                    <li className="link">
                        <a href="#contact2"  className="href contact_show" onClick={onClose}>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Menu