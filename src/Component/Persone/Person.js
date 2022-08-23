import {useRef, useEffect, useCallback} from "react";
import {gsap} from "gsap";

import {data} from '../../data'

const speed = 0.1;
let mouse = {x: 0, y: 0};
let glass = {x: 0, y: 0};
let enlargedImagePos = {x: 0, y: 0};
let runMovement = false;
let containerRect = {}
let timer = null;

const Person = () => {
    const deviceHasPointer = useRef(window.matchMedia("(pointer: fine)").matches).current;
    let container = useRef(null);
    let magnifier = useRef(null);
    let enlargedImage = useRef(null);


    const getMousePos = useCallback((e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    }, [mouse])

    const moveGlass = useCallback(() => {
        if (magnifier && enlargedImage) {
            // Calculate smooth mouse movement
            glass.x = lerp(glass.x, mouse.x, speed);
            glass.y = lerp(glass.y, mouse.y, speed);

            // Calculate enlarged image position
            enlargedImagePos.x = ((glass.x - containerRect.left) / containerRect.width) * -100;
            enlargedImagePos.y = ((glass.y - containerRect.top) / containerRect.height) * -100;

            // Set style positions
            magnifier.style.transform = `translate(calc(${glass.x}px - 50%), calc(${glass.y}px  - 50%))`;
            enlargedImage.style.transform = `translate(${enlargedImagePos.x}%, ${enlargedImagePos.y}%)`;

            if (runMovement) requestAnimationFrame(moveGlass);
        }
    }, [glass, mouse, magnifier, runMovement, containerRect, enlargedImage, enlargedImagePos])

    const showGlass = useCallback(() => {
        clearTimeout(timer)
        if (magnifier) {
            containerRect = container.getBoundingClientRect();
            runMovement = true;
            magnifier.style.opacity = "1";
            moveGlass();
        }
    }, [timer, magnifier, moveGlass, container, runMovement, containerRect])

    const hideGlass = useCallback(() => {
        if (magnifier) {
            magnifier.style.opacity = "0";
            timer = setTimeout(() => {
                runMovement = false;
            }, 50);
        }
    }, [timer, magnifier, runMovement])

    const lerp = useCallback((a, b, n) => {
        return (1 - n) * a + n * b;
    }, [])

    const init = useCallback(() => {
        if (deviceHasPointer) {
            containerRect = container?.getBoundingClientRect();
            moveGlass();
        }
    }, [moveGlass, deviceHasPointer, containerRect])

    useEffect(() => {
        init()

        gsap.fromTo(".person_profession", {
            y: 150, opacity: 0
        }, {
            duration: 1, y: 0, opacity: 1, ease: "bounce.out"
        });

        gsap.fromTo(".word-letter", {
            y: -100, opacity: 0,
        }, {
            opacity: 1, y: 0, stagger: 0.05, duration: 0.3,
        })

    }, [])

    return (
        <div className="person_block">
            <div
                ref={ref => container = ref}
                className="magnifying-glass"
                onMouseEnter={showGlass}
                onMouseLeave={hideGlass}
                onMouseMove={getMousePos}
            >

                <img
                    src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000"
                    alt=""
                    className="magnifying-glass__img"
                    draggable="false"
                />

            </div>

            <div
                ref={ref => magnifier = ref}
                className="magnifying-glass__magnifier"
            >
                <div
                    ref={ref => enlargedImage = ref}
                    className="magnifying-glass__enlarged-image"
                >

                    <img
                        src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000"
                        alt=""
                        className="magnifying-glass__img"
                        draggable="false"
                    />

                </div>
            </div>
            <h1 className="person_name">
                {`${data.name}${'\u00A0'}${data.surname}`.split('').map((letter, index) => {
                    return <span key={index} className={'word-letter'}>{letter}</span>
                })}
            </h1>
            <h2 className="person_profession">{data.profession}</h2>
        </div>
    )
}

export default Person