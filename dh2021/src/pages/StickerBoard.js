import React, { useEffect } from "react";
import "./StickerBoard.css"
import Board from "../components/Board/Board.js"
import StickerCollection from "../components/StickerCollection/StickerCollection.js"

function StickerBoard() {
  document.body.style.backgroundColor = "#BCD1E4";

  useEffect(() => {
    
  }, [])

  return (
    <div id="sticker-board">
      <h1>My Sticker Board!</h1>
      <div id="sticker-elements">
        <StickerCollection />
        <Board />
      </div>
      <h3>Reach your goal to unlock the next sticker :)</h3>
    </div>
  )
}

export default StickerBoard;