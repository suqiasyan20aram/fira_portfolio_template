import React, {useEffect} from "react";
import { gsap } from "gsap";

const Experience = () => {

    useEffect(()=> {

        gsap.fromTo("#title3", {
                x:-100,
                scale:0.5,
            },
            {
                x:25,
                scale:1,
                duration: 10,
                scrollTrigger: {
                    trigger: "#title3",
                    scrub: 1,
                    start: 'top 90%',
                    end: 'top 75%',
                },
            }
        )


    },[])

    return (
        <div id="experience" className="experience_block">
            <div className="experience_placeholder">
                <h1 id={"title3"} className="title">
                    experience
                </h1>
            </div>
            <div className="experience_info_block">
                <div className="middle_line"/>
                <div className='item'>
                    <div className="dot"/>
                    <div className="left">
                        <h2 className="name">OFFICE NAME</h2>
                        <h3 className="date">2022</h3>
                    </div>
                    <div className="right">
                        <h2 className="profession">UI/UX Designer</h2>
                        <h3 className="description">Small descripiton is enough.</h3>
                    </div>
                </div>
                <div className='item'>
                    <div className="dot"/>
                    <div className="left">
                        <h2 className="name">OFFICE NAME</h2>
                        <h3 className="date">2022</h3>
                    </div>
                    <div className="right">
                        <h2 className="profession">UI/UX Designer</h2>
                        <h3 className="description">Small descripiton is enough.</h3>
                    </div>
                </div>
                <div className='item'>
                    <div className="dot"/>
                    <div className="left">
                        <h2 className="name">OFFICE NAME</h2>
                        <h3 className="date">2022</h3>
                    </div>
                    <div className="right">
                        <h2 className="profession">UI/UX Designer</h2>
                        <h3 className="description">Small descripiton is enough.</h3>
                    </div>
                </div>
                <div className='item'>
                    <div className="dot"/>
                    <div className="left">
                        <h2 className="name">OFFICE NAME</h2>
                        <h3 className="date">2022</h3>
                    </div>
                    <div className="right">
                        <h2 className="profession">UI/UX Designer</h2>
                        <h3 className="description">Small descripiton is enough.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Experience