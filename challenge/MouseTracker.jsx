//challenge 3
import { useState, useEffect } from "react"

function MouseTracker(props) {
    const [currentState, setState] = useState([0, 0]);

    useEffect(
        () => {


            function trackMouse(event) {
                let currentMouseCoordinates = [event.clientX, event.clientY]
                setState(currentMouseCoordinates)
            }

            window.addEventListener("mousemove", trackMouse);

            return () => { window.removeEventListener("mousemove", trackMouse); }
            /* note: you have to  return an ARROW function that removes the window event listener here
            i.e. you cant just do return window.removeEventListener("mousemove", trackMouse);*/


        }, []
    )


    return (<output>{currentState[0]},{currentState[1]}</output>);

}

export default MouseTracker;