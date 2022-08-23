import discord from "../../images/1.svg";
import medium from "../../images/2.svg";
import email from "../../images/4.svg";
import linkedin from "../../images/7.svg";
import twitter from "../../images/3.svg";
import github from "../../images/5.svg";
import upwork from "../../images/6.svg";

// icon color#9C9C9C

const Contact = () => {
    return (
        <div id="contact" className="contact_container">
            <div className="aa">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div id="contact" className="contact_block">
                    <div className="one_section">
                        <div className="discord_block">
                            <a target="_blank" href="https://discordapp.com/users/955195563635253338">
                                <img src={discord} alt="icon"/>
                            </a>
                        </div>
                        <div className="medium_block">
                            <a target="_blank" href="https://medium.com/@simpleaspie">
                                <img src={medium} alt="icon"/>
                            </a>
                        </div>
                        <div className="twitter_block">
                            <a target="_blank" href="https://twitter.com/robobot171">
                                <img src={twitter} alt="icon"/>
                            </a>
                        </div>

                    </div>
                    <div className="two_section">
                        <div className="email_block">
                            <a target="_blank" href="mailto:work@mkrtchyanrobert.com">
                                <img src={email} alt="icon"/>
                            </a>
                        </div>
                        <div className="upwork_block">
                            <a target="_blank" href="https://www.upwork.com/freelancers/~0169ce3e2dd25704eb">
                                <img src={upwork} alt="icon"/>
                            </a>
                        </div>
                        <div className="linkedin_block">
                            <a target="_blank" href="https://www.linkedin.com/in/mkrtchian-robert">
                                <img src={linkedin} alt="icon"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact