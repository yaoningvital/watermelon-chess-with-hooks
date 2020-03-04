import React from 'react'

function Chess (props) {
  let {name, siblings, side, r, bw, a} = props
  
  let backgroundColor = null
  if (side === 0) {
    backgroundColor = '#144181'
  } else if (side === 1) {
    backgroundColor = '#e5e8e9'
  }
  
  let top, left = 0
  if (name === 'N1') {
    top = 0
    left = 3 * a
  } else if (name === 'N2') {
    top = a / 12
    left = 3 * a - 0.9965 * a
  } else if (name === 'N3') {
    top = a
    left = 3 * a
  } else if (name === 'N4') {
    top = a / 12
    left = 3 * a + 0.9965 * a
  } else if (name === 'W1') {
    top = 3 * a - 0.9965 * a
    left = a / 12
  } else if (name === 'W2') {
    top = 3 * a
    left = 0
  } else if (name === 'W3') {
    top = 3 * a + 0.9965 * a
    left = a / 12
  } else if (name === 'W4') {
    top = 3 * a
    left = a
  } else if (name === 'S1') {
    top = 5 * a
    left = 3 * a
  } else if (name === 'S2') {
    top = 6 * a - a / 12
    left = 3 * a - 0.9965 * a
  } else if (name === 'S3') {
    top = 6 * a
    left = 3 * a
  } else if (name === 'S4') {
    top = 6 * a - a / 12
    left = 3 * a + 0.9965 * a
  } else if (name === 'E1') {
    top = 3 * a - 0.9965 * a
    left = 6 * a - a / 12
  } else if (name === 'E2') {
    top = 3 * a
    left = 5 * a
  } else if (name === 'E3') {
    top = 3 * a + 0.9965 * a
    left = 6 * a - a / 12
  } else if (name === 'E4') {
    top = 3 * a
    left = 6 * a
  } else if (name === 'C1') {
    top = 3 * a - 0.9965 * a
    left = 3 * a
  } else if (name === 'C2') {
    top = 3 * a
    left = 3 * a - 0.9965 * a
  } else if (name === 'C3') {
    top = 3 * a + 0.9965 * a
    left = 3 * a
  } else if (name === 'C4') {
    top = 3 * a
    left = 3 * a + 0.9965 * a
  } else if (name === 'C5') {
    top = 3 * a
    left = 3 * a
  }
  
  return (
    (side === 0 || side === 1) &&
    <button className="chess"
            style={{
              width: 2 * r + 'px',
              height: 2 * r + 'px',
              borderRadius: r + 'px',
              backgroundColor: backgroundColor,
              top: top + 'px',
              left: left + 'px',
            }}
    />
  )
}

export default Chess