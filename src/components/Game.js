import React, { useState } from 'react'
import Board from './Board'
import { chessesDefault } from '../utils'

function Game () {
  let boardWidth = document.documentElement.clientWidth * 0.9
  let r = 0.0463 * boardWidth // 棋子的半径
  let a = (0.5 * boardWidth - r) / 3 // 五个小圆的半径
  let [history, setHistory] = useState([{
    chesses: chessesDefault,
  }])
  
  console.log('boardWidth:', boardWidth)
  return (
    <div className="game">
      {/*游戏名称*/}
      <h4>西瓜棋</h4>
      <Board boardWidth={boardWidth + 'px'}
             chesses={history[history.length - 1].chesses}
             r={r}
             a={a}
      />
    </div>
  )
}

export default Game