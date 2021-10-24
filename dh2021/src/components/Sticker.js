import React from "react";

function Sticker(props) {
  return (
    <div className="sticker">
      <img src={props.url} alt={props.name}/>
    </div>
  );
}

export default Sticker;