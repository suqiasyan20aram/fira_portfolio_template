import React, {useEffect} from "react";
import {gsap} from "gsap";

import {data} from '../../data';

const About = () => {

    useEffect(() => {
        gsap.to("#title1", {
            x: -80,
            scrollTrigger: {
                trigger: "#title1",
                scrub: 1,
                start: 'top 60%',
                end: 'top 40%',
            }
        });
        gsap.to(".liner", {
            rotation: 0,
            duration: 10,
            scrollTrigger: {
                trigger: ".liner",
                scrub: true,
                start: 'top 75%',
                end: 'top 20%',
            }
        })
        gsap.to(".image_block", {
            rotation: 0,
            duration: 10,
            scrollTrigger: {
                trigger: ".image_block",
                scrub: true,
                start: 'top 75%',
                end: 'top 20%',
            }
        })
        gsap.to(".text", {
            y: -120,
            duration: 10,
            scrollTrigger: {
                trigger: ".text",
                scrub: true,
                start: 'top 90%',
                end: 'top 20%',
            },
        })
    }, [])

    return (
        <div id="about" className="about_block">
            <div className="about_placeholder">
                <h1 id={'title1'} className="title">about me</h1>
            </div>
            <div className="about_body">
                <div className="liner">
                    <figure className="image_block">
                        <img src={data.aboutImage} alt="Img" className="image"/>
                    </figure>
                </div>
                <div className="about_info">
                    <span className="text">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
                        luctus venenatis,lectus magna fringilla urna, porttitor
                    </span>
                    <span className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit amet luctus venenatis
                    </span>
                    <span className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
                    </span>
                </div>
            </div>
        </div>
    )
}
export default About