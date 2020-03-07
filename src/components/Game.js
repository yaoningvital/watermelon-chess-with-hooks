import React, { useState } from 'react'
import Board from './Board'
import { chessesDefault, findBeEatenChesses, getAbleReceive, getNewChesses, isOneOfAbleReceive } from '../utils'
import _ from 'lodash'

function Game () {
  let boardWidth = document.documentElement.clientWidth * 0.9
  let r = 0.0463 * boardWidth // 棋子的半径
  let a = (0.5 * boardWidth - r) / 3 // 五个小圆的半径
  
  let [clickedChess, setClickedChess] = useState(null) // 当前点击的棋子
  let [ableReceive, setAbleReceive] = useState([]) // 落子点
  
  let sides = [0, 1] // 对战双方
  let [winnerSide, setWinnerSide] = useState(null) // 获胜方
  
  let [history, setHistory] = useState([{
    chesses: chessesDefault,
    currentSide: 1,
  }])
  
  function handleClickChess (chessData) {
    if (sides.includes(winnerSide)) return // 已经有人胜出了，返回
    if (chessData.side !== history[history.length-1].currentSide) return // 如果点击的不是当前可下方，返回
    
    // 1、改变点击棋子的样式
    setClickedChess(chessData)
    
    // 2、找落子点
    let newAbleReceive = getAbleReceive(chessData, history[history.length - 1].chesses)
    setAbleReceive(newAbleReceive)
  }
  
  // 处理点击落子点
  function handleClickChessWrap (chessData) {
    if (sides.includes(winnerSide)) return // 已经有人胜出了，返回
    
    // 如果不是落子点，返回
    if (!isOneOfAbleReceive(chessData, ableReceive)) return
    // 落子点变成点击棋子的 side
    let newChesses = _.cloneDeep(history[history.length - 1].chesses)
    newChesses = getNewChesses(newChesses, chessData, clickedChess.side)
    // 当前点击的棋子 变成 空格
    newChesses = getNewChesses(newChesses, clickedChess, null)
    // 更新
    let newCurrentSide = history[history.length-1].currentSide === 0 ? 1 : 0
    setClickedChess(null)
    setAbleReceive([])
    let newHistory = _.cloneDeep(history)
    newHistory.push({
      chesses: newChesses,
      currentSide: newCurrentSide,
    })
    setHistory(newHistory)
    
    // 判断有没有棋子被吃掉
    let beEatenChesses = findBeEatenChesses(newChesses, newCurrentSide)
    
    if (beEatenChesses.length > 0) { // 有棋子被吃掉
      setTimeout(() => {
        let cashChesses = _.cloneDeep(newChesses)
        let shiningTimes = 6
        
        let timer = setInterval(() => {
          shiningTimes--
          cashChesses = changeCashChesses(cashChesses, beEatenChesses, newCurrentSide)
          let cashHistory = _.cloneDeep(history)
          cashHistory.pop()
          cashHistory.push({
            chesses: cashChesses,
            currentSide: newCurrentSide,
          })
          setHistory(cashHistory)
          
          if (shiningTimes < 0) {
            clearInterval(timer)
            
            setTimeout(() => {
              // 去掉被吃掉的棋子
              let newHistory = deleteBeEatenChesses(beEatenChesses, cashHistory, newCurrentSide)
              
              let newCurrentSideCount = 0 // 被吃掉方剩下的棋子个数
              let latestChesses = newHistory[newHistory.length - 1].chesses
              for (let latestChessItem of latestChesses) {
                if (latestChessItem.side === newCurrentSide) {
                  newCurrentSideCount++
                }
              }
              if (newCurrentSideCount <= 2) { // 如果被吃掉方的棋子只剩下2颗或更少，则对方获胜
                let winner = newCurrentSide === 0 ? 1 : 0
                setWinnerSide(winner)
              }
            }, 10)
          }
        }, 500)
      }, 100)
    }
  }
  
  /**
   * 从当前棋子布局中删除掉 被吃掉的棋子
   * @param beEatenChesses : 被吃掉的棋子
   */
  function deleteBeEatenChesses (beEatenChesses, cashHistory, newCurrentSide) {
    let newHistory = _.cloneDeep(cashHistory)
    let newChesses = _.cloneDeep(newHistory[newHistory.length - 1].chesses)
    for (let chessItem of newChesses) {
      if (beEatenChesses.includes(chessItem.name)) {
        chessItem.side = null
      }
    }
    newHistory.pop()
    newHistory.push({
      chesses: newChesses,
      currentSide: newCurrentSide,
    })
    setHistory(newHistory)
    return newHistory
  }
  
  function changeCashChesses (cashChesses, beEatenChesses, newCurrentSide) {
    for (let chessItem of cashChesses) {
      if (beEatenChesses.includes(chessItem.name)) {
        if (chessItem.side === newCurrentSide) {
          chessItem.side = null
        } else if (chessItem.side === null) {
          chessItem.side = newCurrentSide
        }
      }
    }
    
    return cashChesses
  }
  
  // 处理 点击 返回上一步
  function goBack () {
    setClickedChess(null)
    setAbleReceive([])
    setWinnerSide(null)
    
    let newHistory = _.cloneDeep(history)
    newHistory.pop()
    setHistory(newHistory)
  }
  
  // 点击 重玩
  function replay () {
    setClickedChess(null)
    setAbleReceive([])
    setWinnerSide(null)
    setHistory([{
      chesses: chessesDefault,
      currentSide: 1,
    }])
  }
  
  return (
    <div className="game">
      {/*游戏名称*/}
      <h4>西瓜棋</h4>
      
      {/*下一步*/}
      {
        winnerSide === null &&
        <div className="next-step">
          <span>下一步：</span>
          <button style={{
            backgroundColor: history[history.length - 1].currentSide === 0 ? '#144181' : '#e5e8e9',
          }}/>
        </div>
      }
      
      {/*获胜方*/}
      {
        sides.includes(winnerSide) &&
        <div className="winner">
          <span>获胜方是：</span>
          <button style={{
            backgroundColor: winnerSide === 0 ? '#144181' : '#e5e8e9',
          }}/>
        </div>
      }
      
      <Board boardWidth={boardWidth + 'px'}
             chesses={history[history.length - 1].chesses}
             r={r}
             a={a}
             clickedChess={clickedChess}
             handleClickChess={handleClickChess}
             ableReceive={ableReceive}
             handleClickChessWrap={handleClickChessWrap}
      />
      
      {/*  按钮区*/}
      <div className="btns">
        <button disabled={history.length === 1}
                onClick={goBack}
        >返回上一步
        </button>
        <button onClick={replay}>重玩</button>
      </div>
    </div>
  )
}

export default Game