import React, {useEffect} from "react";
import {gsap, Elastic} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import classes from './Portfolio.module.css'
import {data} from "../../data";

const Portfolio = () => {

    useEffect(() => {
        gsap.to("#title2", {
            x: 30,
            duration: 10,
            ease: Elastic.easeOut.config(2.5, 0.4),
            scrollTrigger: {
                trigger: "#title2",
                scrub: 1,
                start: 'top 70%',
                end: 'top 15%',
            },
        })

        gsap.fromTo(".portfolio_button", {
                scale: 0.5,
            },
            {
                scale: 1,
                duration: 10,
                scrollTrigger: {
                    trigger: ".portfolio_button",
                    scrub: 1,
                    start: 'top 95%',
                    end: 'top 80%',
                },
            }
        )

        ScrollTrigger.matchMedia({
            "(min-width:1441px)": function () {
                gsap.fromTo(".two", {
                        x: -280,
                        opacity: 0.2,
                    },
                    {
                        x: 0,
                        duration: 10,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: ".two",
                            scrub: 1,
                            start: 'top 75%',
                            end: 'top 50%',
                        },
                    }
                )
            }
        })

        ScrollTrigger.matchMedia({
            "(min-width:1441px)": function () {
                gsap.fromTo(".three", {
                        x: -530,
                        opacity: 0.1,
                    },
                    {
                        x: 0,
                        duration: 10,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: ".three",
                            scrub: 1,
                            start: 'top 75%',
                            end: 'top 50%',
                        },
                    })
            }
        })
        ScrollTrigger.matchMedia({
            "(min-width:1441px)": function () {
                gsap.fromTo(".four", {
                        x: 450,
                        opacity: 0.1,
                    },
                    {
                        x: 0,
                        duration: 10,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: ".four",
                            scrub: 1,
                            start: 'top 75%',
                            end: 'top 50%',
                        },
                    })
            }
        })
        ScrollTrigger.matchMedia({
            "(min-width:1441px)": function () {
                gsap.fromTo(".five", {
                        x: 225,
                        opacity: 0.2,
                    },
                    {
                        x: 0,
                        duration: 10,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: ".five",
                            scrub: 1,
                            start: 'top 75%',
                            end: 'top 50%',
                        },
                    })
            }
        })

        ScrollTrigger.matchMedia({
            "(min-width:1025px)": function () {
                gsap.fromTo(".two", {
                        x: -280,
                        opacity: 0.2,
                    },
                    {
                        x: 0,
                        duration: 10,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: ".two",
                            scrub: 1,
                            start: 'top 90%',
                            end: 'top 50%',
                        },
                    }
                )
            }
        })


        ScrollTrigger.matchMedia({
            "(min-width:1025px)": function () {
                gsap.fromTo(".three", {
                        x: -530,
                        opacity: 0.1,
                    },
                    {
                        x: 0,
                        duration: 10,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: ".three",
                            scrub: 1,
                            start: 'top 90%',
                            end: 'top 50%',
                        },
                    })
            }
        })

        ScrollTrigger.matchMedia({
            "(min-width:1025px)": function () {
                gsap.fromTo(".four", {
                        x: 420,
                        opacity: 0.1,
                    },
                    {
                        x: 0,
                        duration: 10,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: ".four",
                            scrub: 1,
                            start: 'top 90%',
                            end: 'top 50%',
                        },
                    })
            }
        })
        ScrollTrigger.matchMedia({
            "(min-width:1025px)": function () {
                gsap.fromTo(".five", {
                        x: 210,
                        opacity: 0.2,
                    },
                    {
                        x: 0,
                        duration: 10,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: ".five",
                            scrub: 1,
                            start: 'top 90%',
                            end: 'top 50%',
                        },
                    })
            }
        })

        ScrollTrigger.matchMedia({
            "(max-width:1024px)": function () {
                gsap.fromTo(".two", {
                        y: -210,
                        opacity: 0.2,
                    },
                    {
                        y: 0,
                        duration: 10,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: ".two",
                            scrub: 1,
                            start: 'top 90%',
                            end: 'top 50%',
                        },
                    })
            }
        })

        ScrollTrigger.matchMedia({
            "(max-width:1024px)": function () {
                gsap.fromTo(".three", {
                        y: -420,
                        opacity: 0.1,
                    },
                    {
                        y: 0,
                        duration: 10,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: ".three",
                            scrub: 1,
                            start: 'top 90%',
                            end: 'top 50%',
                        },
                    })
            }
        })

        ScrollTrigger.matchMedia({
            "(max-width:1024px)": function () {
                gsap.fromTo(".five", {
                        y: -210,
                        opacity: 0.2,
                    },
                    {
                        y: 0,
                        duration: 10,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: ".five",
                            scrub: 1,
                            start: 'top 90%',
                            end: 'top 50%',
                        },
                    })
            }
        })

        ScrollTrigger.matchMedia({
            "(max-width:1024px)": function () {
                gsap.fromTo(".six", {
                        y: -420,
                        opacity: 0.1,
                    },
                    {
                        y: 0,
                        duration: 10,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: ".six",
                            scrub: 1,
                            start: 'top 90%',
                            end: 'top 50%',
                        },
                    })
            }
        })

        ScrollTrigger.matchMedia({
            "(max-width:768px)": function () {
                gsap.fromTo(".two", {
                        y: -220,
                    },
                    {
                        y: 0,
                        duration: 10,
                        scrollTrigger: {
                            trigger: ".two",
                            scrub: 1,
                            start: 'top 70%',
                            end: 'top 50%',
                        },
                    })
            }
        })
        ScrollTrigger.matchMedia({
            "(max-width:768px)": function () {
                gsap.fromTo(".three", {
                        y: -440,
                    },
                    {
                        y: 0,
                        duration: 10,
                        scrollTrigger: {
                            trigger: ".three",
                            scrub: 1,
                            start: 'top 79%',
                            end: 'top 50%',
                        },
                    })
            }
        })
        ScrollTrigger.matchMedia({
            "(max-width:768px)": function () {
                gsap.fromTo(".four", {
                        y: -660,
                        opacity: 0.1,
                    },
                    {
                        y: 0,
                        duration: 10,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: ".four",
                            scrub: 1,
                            start: 'top 88%',
                            end: 'top 50%',
                        },
                    })
            }
        })
        ScrollTrigger.matchMedia({
            "(max-width:768px)": function () {
                gsap.fromTo(".five", {
                        y: -880,
                    },
                    {
                        y: 0,
                        duration: 10,
                        scrollTrigger: {
                            trigger: ".five",
                            scrub: 1,
                            start: 'top 98%',
                            end: 'top 50%',
                        },
                    })
            }
        })
        ScrollTrigger.matchMedia({
            "(max-width:768px)": function () {
                gsap.fromTo(".six", {
                        y: -1100,
                    },
                    {
                        y: 0,
                        duration: 10,
                        scrollTrigger: {
                            trigger: ".six",
                            scrub: 1,
                            start: 'top 100%',
                            end: 'top 50%',
                        },
                    })
            }
        })

    }, [])

    return (
        <section id="portfolio" className={classes.portfolioSection}>
            <div className={classes.portfolioPlaceholder}>
                <h1 id={"title2"} className="title">
                    portfolio
                </h1>
            </div>
            <div className={classes.portfolioItems}>
                {data.portfolios.map(portfolio => {
                    return (
                        <div className={classes.portfolioItem}></div>
                    )
                })}
            </div>

        </section>
    )
}
export default Portfolio
