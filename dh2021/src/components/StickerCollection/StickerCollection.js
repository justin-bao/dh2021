import React, { useEffect } from "react";
import "./StickerCollection.css"
import Sticker from "../Sticker.js"

function StickerCollection(props) {
  document.body.style.backgroundColor = "#BCD1E4";
  var stickers = [];

  /*useEffect(() => {
    fetch('/stickers-list')
    .then(response => response.json())
    .then(response => {
      response.forEach(element => stickers.push(<Sticker url={}
        
      }
    )
    .catch (error => {
      console.log(error)
    })
  }, [])*/

  return (
    <div id="sticker-collection">
    </div>
  )
}

export default StickerCollection;