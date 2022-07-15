// Code Keypad Component Here
import React from "react"

function Keypad () {
    function handleChange(event) {
        console.log(`${event.target.name}`)
    }
    return(
        <input
        name="Entering password..."
        type="password"
        placeholder ="Enter password"
        onChange={handleChange}
        />
       
    )
}
export default Keypad