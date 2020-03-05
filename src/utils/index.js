export const chessesDefault = [
  {
    name: 'N1',
    siblings: ['N2', 'N3', 'N4'],
    side: 0,
  },
  {
    name: 'N2',
    siblings: ['N1', 'N3', 'W1'],
    side: 0,
  },
  {
    name: 'N3',
    siblings: ['N2', 'N1', 'N4', 'C1'],
    side: 0,
  },
  {
    name: 'N4',
    siblings: ['N1', 'N3', 'E1'],
    side: 0,
  },
  {
    name: 'W1',
    siblings: ['W2', 'W4', 'N2'],
    side: 0,
  },
  {
    name: 'W2',
    siblings: ['W1', 'W3', 'W4'],
    side: null,
  },
  {
    name: 'W3',
    siblings: ['W2', 'S2', 'W4'],
    side: 1,
  },
  {
    name: 'W4',
    siblings: ['W1', 'W2', 'W3', 'C2'],
    side: null,
  },
  {
    name: 'S1',
    siblings: ['S2', 'S3', 'S4', 'C3'],
    side: 1,
  },
  {
    name: 'S2',
    siblings: ['W3', 'S3', 'S1'],
    side: 1,
  },
  {
    name: 'S3',
    siblings: ['S1', 'S2', 'S4'],
    side: 1,
  },
  {
    name: 'S4',
    siblings: ['S1', 'S3', 'E3'],
    side: 1,
  },
  {
    name: 'E1',
    siblings: ['N4', 'E2', 'E4'],
    side: 0,
  },
  {
    name: 'E2',
    siblings: ['C4', 'E3', 'E4', 'E1'],
    side: null,
  },
  {
    name: 'E3',
    siblings: ['E2', 'S4', 'E4'],
    side: 1,
  },
  {
    name: 'E4',
    siblings: ['E1', 'E2', 'E3'],
    side: null,
  },
  {
    name: 'C1',
    siblings: ['N3', 'C2', 'C5', 'C4'],
    side: null,
  },
  {
    name: 'C2',
    siblings: ['C1', 'W4', 'C3', 'C5'],
    side: null,
  },
  {
    name: 'C3',
    siblings: ['C5', 'C2', 'S1', 'C4'],
    side: null,
  },
  {
    name: 'C4',
    siblings: ['C1', 'C5', 'C3', 'E2'],
    side: null,
  },
  {
    name: 'C5',
    siblings: ['C1', 'C2', 'C3', 'C4'],
    side: null,
  },
]

/**
 * 返回当前点击棋子的落子点
 * @param clickedChessData :当前点击的这个棋子
 * @param currentChesses : 当前棋子布局
 * @returns {[]}
 */
export function getAbleReceive (clickedChessData, currentChesses) {
  let siblings = clickedChessData.siblings
  let ableReceive = []
  for (let i = 0; i < siblings.length; i++) {
    for (let j = 0; j < currentChesses.length; j++) {
      if (currentChesses[j].name === siblings[i]) {
        if (currentChesses[j].side === null) {
          ableReceive.push(currentChesses[j])
        }
      }
    }
  }
  return ableReceive
}

/**
 * 判断当前位置是不是一个落子点
 * @param chessData : 当前位置
 * @param ableReceive : 所有的落子点组成的数组
 * @returns {boolean}
 */
export function isOneOfAbleReceive (chessData, ableReceive) {
  let isAbleReceive = false
  for (let i = 0; i < ableReceive.length; i++) {
    if (ableReceive[i].name === chessData.name) {
      isAbleReceive = true
      break
    }
  }
  return isAbleReceive
}

/**
 * 返回这个棋子相对于 board 的位置（top和left的值）
 * @param chessName : 棋子名称
 * @param a : 五个小圆的半径
 * @returns {{top: number, left: number}}
 */
export function getChessPosition (chessName, a) {
  let top, left = 0
  if (chessName === 'N1') {
    top = 0
    left = 3 * a
  } else if (chessName === 'N2') {
    top = a / 12
    left = 3 * a - 0.9965 * a
  } else if (chessName === 'N3') {
    top = a
    left = 3 * a
  } else if (chessName === 'N4') {
    top = a / 12
    left = 3 * a + 0.9965 * a
  } else if (chessName === 'W1') {
    top = 3 * a - 0.9965 * a
    left = a / 12
  } else if (chessName === 'W2') {
    top = 3 * a
    left = 0
  } else if (chessName === 'W3') {
    top = 3 * a + 0.9965 * a
    left = a / 12
  } else if (chessName === 'W4') {
    top = 3 * a
    left = a
  } else if (chessName === 'S1') {
    top = 5 * a
    left = 3 * a
  } else if (chessName === 'S2') {
    top = 6 * a - a / 12
    left = 3 * a - 0.9965 * a
  } else if (chessName === 'S3') {
    top = 6 * a
    left = 3 * a
  } else if (chessName === 'S4') {
    top = 6 * a - a / 12
    left = 3 * a + 0.9965 * a
  } else if (chessName === 'E1') {
    top = 3 * a - 0.9965 * a
    left = 6 * a - a / 12
  } else if (chessName === 'E2') {
    top = 3 * a
    left = 5 * a
  } else if (chessName === 'E3') {
    top = 3 * a + 0.9965 * a
    left = 6 * a - a / 12
  } else if (chessName === 'E4') {
    top = 3 * a
    left = 6 * a
  } else if (chessName === 'C1') {
    top = 3 * a - 0.9965 * a
    left = 3 * a
  } else if (chessName === 'C2') {
    top = 3 * a
    left = 3 * a - 0.9965 * a
  } else if (chessName === 'C3') {
    top = 3 * a + 0.9965 * a
    left = 3 * a
  } else if (chessName === 'C4') {
    top = 3 * a
    left = 3 * a + 0.9965 * a
  } else if (chessName === 'C5') {
    top = 3 * a
    left = 3 * a
  }
  
  return {
    top,
    left
  }
}

/**
 * 将点击的落子点变为新的颜色（side），返回更新后的棋子布局
 * @param newChesses : 当前棋子布局
 * @param clickedAbleReceive : 点击的落子点
 * @param newside : 新的颜色(新的side)
 * @returns {*}
 */
export function getNewChesses (newChesses, clickedAbleReceive, newside) {
  for (let i = 0; i < newChesses.length; i++) {
    if (newChesses[i].name === clickedAbleReceive.name) {
      newChesses[i].side = newside
      return newChesses
    }
  }
}