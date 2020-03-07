import React from 'react'

function Chess (props) {
  let {chessData, chessWidth, boxShadow, handleClickChess,} = props
  
  let backgroundImage = null
  if (chessData.side === 0) {
    backgroundImage = `radial-gradient(at 80px 80px, #144181, #144181)`
  } else if (chessData.side === 1) {
    backgroundImage = `radial-gradient(at 80px 80px, #e5e8e9, #e5e8e9)`
  }
  
  
  return (
    <button className="chess"
            style={{
              width: chessWidth + 'px',
              height: chessWidth + 'px',
              borderRadius: chessWidth / 2 + 'px',
              backgroundImage: backgroundImage,
              boxShadow: boxShadow,
            }}
            onClick={() => handleClickChess(chessData)}
    />
  )
}

export default Chess