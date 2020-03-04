import React from 'react'
import Chess from './Chess'

function Board (props) {
  let {boardWidth, chesses, r,a} = props
  return (
    <div className="board"
         style={{
           width: boardWidth,
           height: boardWidth,
         }}
    >
      {
        chesses.map((chessData) => (
          <Chess
            key={chessData.name}
            name={chessData.name}
            siblings={chessData.siblings}
            side={chessData.side}
            r={r}
            bw={boardWidth}
            a={a}
          />
        ))
      }
    
    
    </div>
  )
}

export default Board