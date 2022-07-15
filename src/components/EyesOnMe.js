// Code EyesOnMe Component Here
import React from "react"

function EyesOnMe(){
    function focusEl() {
        console.log('Good!')
    }
    function blurEl(){
        console.log('Hey! Eyes on me!')
    }
    return (
        <button onFocus = {focusEl} onBlur = {blurEl}>
            Eyes on me
        </button>
    )
}


export default EyesOnMe