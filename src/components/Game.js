import React, { useState } from 'react'
import Board from './Board'
import { chessesDefault, getAbleReceive, getNewChesses, isOneOfAbleReceive } from '../utils'
import _ from 'lodash'

function Game () {
  let boardWidth = document.documentElement.clientWidth * 0.9
  let r = 0.0463 * boardWidth // 棋子的半径
  let a = (0.5 * boardWidth - r) / 3 // 五个小圆的半径
  let [history, setHistory] = useState([{
    chesses: chessesDefault,
  }])
  
  let [clickedChess, setClickedChess] = useState(null) // 当前点击的棋子
  let [ableReceive, setAbleReceive] = useState([]) // 落子点
  
  let sides = [0, 1] // 对战双方
  let [currentSide, setCurrentSide] = useState(1) // 默认白棋先下
  
  function handleClickChess (chessData) {
    if (chessData.side !== currentSide) return // 如果点击的不是当前可下方，返回
    
    // 1、改变点击棋子的样式
    setClickedChess(chessData)
    
    // 2、找落子点
    let newAbleReceive = getAbleReceive(chessData, history[history.length - 1].chesses)
    setAbleReceive(newAbleReceive)
  }
  
  // 处理点击落子点
  function handleClickChessWrap (chessData) {
    // 如果不是落子点，返回
    if (!isOneOfAbleReceive(chessData, ableReceive)) return
    // 落子点变成点击棋子的 side
    let newChesses = _.cloneDeep(history[history.length - 1].chesses)
    newChesses = getNewChesses(newChesses, chessData, clickedChess.side)
    // 当前点击的棋子 变成 空格
    newChesses = getNewChesses(newChesses, clickedChess, null)
    // 更新下一步
    let newCurrentSide = currentSide === 0 ? 1 : 0
    setCurrentSide(newCurrentSide)
    
    setClickedChess(null)
    setAbleReceive([])
    let newHistory = _.cloneDeep(history)
    newHistory.push({chesses: newChesses})
    setHistory(newHistory)
  }
  
  return (
    <div className="game">
      {/*游戏名称*/}
      <h4>西瓜棋</h4>
      <div className="next-step">
        <span>下一步：</span>
        <button style={{
          backgroundColor: currentSide === 0 ? '#144181' : '#e5e8e9',
        }}/>
      </div>
      <Board boardWidth={boardWidth + 'px'}
             chesses={history[history.length - 1].chesses}
             r={r}
             a={a}
             clickedChess={clickedChess}
             handleClickChess={handleClickChess}
             ableReceive={ableReceive}
             handleClickChessWrap={handleClickChessWrap}
      />
    </div>
  )
}

export default Game