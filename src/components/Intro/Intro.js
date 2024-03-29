import React from 'react'
import introVideo from '../../assets/video.mp4'
import Button from '../Button/Button'
import './Intro.css'
const Intro = () => {
    return (
        <section className='intro'>
            <video className='video' autoPlay loop muted >
                <source src={introVideo} type="video/mp4" />
            </video>
            <div className='text_content'>
                <h2 className='title'>Decentralized<br /><span>Trading </span>Protocol</h2>
                <p className='text'>Guaranteed liquidity trading for millions of users and top Ethereum applications.</p>
                <div className='btn-group'>
                  <Button text='Use Defi' BtnType='btn' />
                  <Button text='FAQ' BtnType='btn outline' />
                </div>
            </div>
            <div className='text-bottom'>
                <h3>Total Volume Secured:<span className='number'> $42,104,783,662.47</span></h3>
            </div>
        </section>
    )
}

export default Intro