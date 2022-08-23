import Slider from 'infinite-react-carousel';
import discord from "../../images/1.svg";
import medium from "../../images/2.svg";
import twitter from "../../images/3.svg";
import email from "../../images/4.svg";
import github from "../../images/5.svg";
import upwork from "../../images/6.svg";
import linkedin from "../../images/7.svg";


const InfiniteScrollSlide = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 1700,
        accessibility: false,
        arrows: false,
        arrowsBlock: false,
        centerMode: true,
        centerPadding: 60,
        duration: 200,
        initialSlide: false,
        overScan: 1,
        pauseOnHover: true,
        shift: 15,
        slidesToShow: 3
    }
    return (
        <div id="contact2" className="slider_container">
            <Slider
                {...settings}
            >
                <div className="slide_item">
                    <div className="discord_block">
                        <a target="_blank" href="https://discordapp.com/users/955195563635253338">
                            <img src={discord} alt="icon"/>
                        </a>
                    </div>
                </div>
                <div className="slide_item">
                    <div className="medium_block">
                        <a target="_blank" href="https://medium.com/@simpleaspie">
                            <img src={medium} alt="icon"/>
                        </a>
                    </div>
                </div>
                <div className="slide_item">
                    <div className="twitter_block">
                        <a target="_blank" href="https://twitter.com/robobot171">
                            <img src={twitter} alt="icon"/>
                        </a>
                    </div>
                </div>
                <div className="slide_item">
                    <div className="email_block">
                        <a target="_blank" href="mailto:work@mkrtchyanrobert.com">
                            <img src={email} alt="icon"/>
                        </a>
                    </div>
                </div>
                <div className="slide_item">
                    <div className="upwork_block">
                        <a target="_blank" href="https://www.upwork.com/freelancers/~0169ce3e2dd25704eb">
                            <img src={upwork} alt="icon"/>
                        </a>
                    </div>
                </div>
                <div className="slide_item">
                    <div className="linkedin_block">
                        <a target="_blank" href="https://www.linkedin.com/in/mkrtchian-robert">
                            <img src={linkedin} alt="icon"/>
                        </a>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default InfiniteScrollSlide