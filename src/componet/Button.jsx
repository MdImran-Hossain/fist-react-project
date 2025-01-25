import React from 'react'

const Button=({buttonContent, buttonDesing})=>{
  return (
    <button className={buttonDesing}>
      {buttonContent}
    </button>
  )
}

export default Button
