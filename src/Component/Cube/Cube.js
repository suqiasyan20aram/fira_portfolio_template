import React, {useEffect} from 'react';
import classNames from "classnames";
import {gsap} from "gsap";

import {data} from '../../data'
import classes from './Cube.module.scss';
import left from '../../images/1.png'
import right from '../../images/2.jpg'
import top from '../../images/3.jpg'
import bottom from '../../images/4.jpg'
import front from '../../images/5.jpg'
import back from '../../images/6.png'

const Cube = () => {

    useEffect(() => {
        const translateZ = -350;
        const defaultTranslateZ = '-25vh';

        gsap.fromTo("#cube-container", {}, {
            scrollTrigger: {
                pin: '#cube-container', trigger: "#cube-container", scrub: 0, start: 'top 0', end: '+=2600',
            },
        })

        gsap.fromTo("#cube", {translateZ: -5000}, {
            translateZ: defaultTranslateZ, scrollTrigger: {
                trigger: "#root", scrub: 0.2, start: window.innerHeight / 3, end: `+=${window.innerHeight / 2}`
            },
        })

        gsap.fromTo("#cube", {}, {
            rotateX: -90, translateZ, scrollTrigger: {
                trigger: "#cube-section", scrub: 0.2, start: '0', end: '+=300'
            },
        })

        gsap.fromTo("#cube", {}, {
            translateZ: defaultTranslateZ, scrollTrigger: {
                trigger: "#cube-section", scrub: 0.2, start: '300', end: '+=100'
            },
        })


        gsap.fromTo("#cube", {}, {
            rotateX: 180, translateZ, scrollTrigger: {
                trigger: "#cube-section", scrub: 0.2, start: '400', end: '+=300'
            },
        })

        gsap.fromTo("#cube", {}, {
            translateZ: defaultTranslateZ, scrollTrigger: {
                trigger: "#cube-section", scrub: 0.2, start: '700', end: '+=100'
            },
        })

        gsap.fromTo("#cube", {}, {
            rotateX: 90, translateZ, scrollTrigger: {
                trigger: "#cube-section", scrub: 0.2, start: '800', end: '+=300'
            },
        })

        gsap.fromTo("#cube", {}, {
            translateZ: defaultTranslateZ, scrollTrigger: {
                trigger: "#cube-section", scrub: 0.2, start: '1100', end: '+=100'
            },
        })

        gsap.fromTo("#cube", {}, {
            rotateX: 360, translateZ, scrollTrigger: {
                trigger: "#cube-section", scrub: 0.2, start: '1200', end: '+=300'
            },
        })

        gsap.fromTo("#cube", {}, {
            translateZ: defaultTranslateZ, scrollTrigger: {
                trigger: "#cube-section", scrub: 0.2, start: '1500', end: '+=100'
            },
        })

        gsap.fromTo("#cube", {}, {
            rotateX: 360, rotateY: 90, translateZ, scrollTrigger: {
                trigger: "#cube-section", scrub: 0.2, start: '1600', end: '+=300'
            },
        })

        gsap.fromTo("#cube", {}, {
            translateZ: defaultTranslateZ, scrollTrigger: {
                trigger: "#cube-section", scrub: 0.2, start: '1900', end: '+=100'
            },
        })

        gsap.fromTo("#cube", {}, {
            rotateX: 360, rotateY: -90, translateZ, scrollTrigger: {
                trigger: "#cube-section", scrub: 0.2, start: '2000', end: '+=300'
            },
        })

        gsap.fromTo("#cube", {}, {
            translateZ: defaultTranslateZ, scrollTrigger: {
                trigger: "#cube-section", scrub: 0.2, start: '2300', end: '+=100'
            },
        })


        // Random
        gsap.fromTo('#top', {}, {
            opacity: 0, translateY: '-100vh', scrollTrigger: {
                trigger: "#cube-section", scrub: 0, start: '2400', end: '+=400'
            },
        })

        gsap.fromTo('#bottom', {}, {
            opacity: 0, translateY: '100vh', scrollTrigger: {
                trigger: "#cube-section", scrub: 0, start: '2400', end: '+=400'
            },
        })


        gsap.fromTo('#right', {}, {
            opacity: 0, translateX: '100vh', scrollTrigger: {
                trigger: "#cube-section", scrub: 0, start: '2400', end: '+=400'
            },
        })

        gsap.fromTo('#left', {}, {
            opacity: 0, translateX: '-100vh', scrollTrigger: {
                trigger: "#cube-section", scrub: 0, start: '2400', end: '+=400'
            },
        })

        gsap.fromTo('#front', {}, {
            opacity: 0, translateZ: '100vh', scrollTrigger: {
                trigger: "#cube-section", scrub: 0, start: '2400', end: '+=400'
            },
        })

        gsap.fromTo('#back', {}, {
            opacity: 0, translateZ: '-100vh', scrollTrigger: {
                trigger: "#cube-section", scrub: 0, start: '2400', end: '+=400'
            },
        })

        gsap.fromTo("#cube", {}, {
            rotateY: -140, scrollTrigger: {
                trigger: "#cube-section", scrub: 0.2, start: '2400', end: '+=400'
            },
        })

    }, [])

    return (
        <div id={'cube-section'}>
            <div id={'cube-container'} className={classes.cubeContainer}>
                <div id={'cube-wrapper'} className={classes.cubeWrapper}>
                    <div id={'cube'} className={classes.cube}>
                        <div id={'top'} className={classNames([classes.side, classes.top])}>
                            <img src={top} alt="top side" className={classes.sideImage}/>
                            <div className={classes.sideInfo}>
                                <p className={classes.title}>{data.cube.top.title}</p>
                                {data.cube.bottom.description && <p className={classes.desc}>
                                    {data.cube.top.description}
                                </p>
                                }
                                {!!data.cube.top.link &&
                                    <a className={classes.openLink}
                                       href={data.cube.top.link.href}>{data.cube.top.link.text}</a>
                                }
                            </div>
                        </div>
                        <div id={'bottom'} className={classNames([classes.side, classes.bottom])}>
                            <img src={bottom} alt="bottom side" className={classes.sideImage}/>
                            <div className={classes.sideInfo}>
                                <p className={classes.title}>{data.cube.bottom.title}</p>
                                {data.cube.bottom.description && <p className={classes.desc}>
                                    {data.cube.bottom.description}
                                </p>
                                }
                                {!!data.cube.bottom.link &&
                                    <a className={classes.openLink}
                                       href={data.cube.bottom.link.href}>{data.cube.bottom.link.text}</a>
                                }
                            </div>
                        </div>
                        <div id={'left'} className={classNames([classes.side, classes.left])}>
                            <img src={left} alt="left side" className={classes.sideImage}/>
                            <div className={classes.sideInfo}>
                                <p className={classes.title}>{data.cube.left.title}</p>
                                {data.cube.bottom.description && <p className={classes.desc}>
                                    {data.cube.left.description}
                                </p>
                                }
                                {!!data.cube.left.link &&
                                    <a className={classes.openLink}
                                       href={data.cube.left.link.href}>{data.cube.left.link.text}</a>
                                }
                            </div>
                        </div>
                        <div id={'right'} className={classNames([classes.side, classes.right])}>
                            <img src={right} alt="right side" className={classes.sideImage}/>
                            <div className={classes.sideInfo}>
                                <p className={classes.title}>{data.cube.right.title}</p>
                                {data.cube.bottom.description && <p className={classes.desc}>
                                    {data.cube.right.description}
                                </p>
                                }
                                {!!data.cube.right.link &&
                                    <a className={classes.openLink}
                                       href={data.cube.right.link.href}>{data.cube.right.link.text}</a>
                                }
                            </div>
                        </div>
                        <div id={'back'} className={classNames([classes.side, classes.back])}>
                            <img src={back} alt="back side" className={classes.sideImage}/>
                            <div className={classes.sideInfo}>
                                <p className={classes.title}>{data.cube.back.title}</p>
                                {data.cube.bottom.description && <p className={classes.desc}>
                                    {data.cube.back.description}
                                </p>
                                }
                                {!!data.cube.back.link &&
                                    <a className={classes.openLink}
                                       href={data.cube.back.link.href}>{data.cube.back.link.text}</a>
                                }
                            </div>
                        </div>
                        <div id={'front'} className={classNames([classes.side, classes.front])}>
                            <img src={front} alt="front side" className={classes.sideImage}/>
                            <div className={classes.sideInfo}>
                                <p className={classes.title}>{data.cube.front.title}</p>
                                {data.cube.bottom.description && <p className={classes.desc}>
                                    {data.cube.front.description}
                                </p>
                                }
                                {!!data.cube.front.link &&
                                    <a className={classes.openLink}
                                       href={data.cube.front.link.href}>{data.cube.front.link.text}</a>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default Cube
