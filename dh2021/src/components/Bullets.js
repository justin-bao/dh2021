import React from "react"

function Bullets(props) {
  return (
    <ul style={"list-style-image:url(" + props.path + ")"}>
    </ul>
  )
}

export default Bullets;