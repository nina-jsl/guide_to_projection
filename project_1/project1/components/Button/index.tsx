import React from 'react'

const Button = ({ width = "140px", height = "60px" , text = "click me"}) => {
  return (
    <button style={{ width, height }}>
      {text}
    </button>
  )
}

export default Button
