//challenge 2
import { useState } from "react";

function Shouter(props) {
    /*useState() returns an array, the 1st element of which is the current state (provided as an argument to useState in the first place)
     and the 2nd element is a fn to update the state before the element is re-rendered*/
    const [currentState, setState] = useState("")

    return (
        <div>
            <input value={currentState} onChange={ (event) => {setState(event.target.value)} } />
            <output>{currentState.toUpperCase()}</output>
        </div>
    )
}

export default Shouter;