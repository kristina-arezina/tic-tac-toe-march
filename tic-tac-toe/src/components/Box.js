import React from "react"

export default function Box(props) {
  return(
    // each box is a button
    <button className= "box" onClick={props.onClick}>
        {props.value}
    </button>
  )
}
