import React from 'react'
import './Button.css'

const Button = ({ text , BtnType }) => {
  return (
    <button className={BtnType}>{text}</button>
  )
}

export default Button