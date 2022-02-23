import React from 'react'
import './About.css'
const Card = ({icon , title , text}) => {
    return (
        <div>
            <div className='card_icon'>
                 {icon}
            </div>
            <h3 className='card_title'>{title}</h3>
            <p className='card_text'>{text}</p>
        </div>
    )
}

export default Card