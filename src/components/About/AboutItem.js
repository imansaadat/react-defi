import React from 'react'
import './About.css'
const AboutItem = ({ item: { title, desc, icon } }) => {
    return (
        <div className="card">
            <div className='card_icon'>
                {icon}
            </div>
            <h3 className='card_title'>{title}</h3>
            <p className='card_text'>{desc}</p>
        </div>
    )
}

export default AboutItem