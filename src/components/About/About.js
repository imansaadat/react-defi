import React from 'react'
import { VscServerProcess } from 'react-icons/vsc'
import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si';
import Button from '../Button/Button';
import Card from './Card'
import './About.css'
const About = () => {
    return (
        <section className='about'>
            <div className='container'>
                <div className='heading'>
                    <h2>A Growing Protocol Ecosystem</h2>
                    <p>The Defi protocol system empowers developers, liquidity providers, and traders to participate in a financial marketplace that is open and accessible to all.</p>
                </div>
                <div className='cards_container'>
                   <Card />
                </div>
                <div className='about_btn'>
                   <Button text='Use Defi' BtnType='btn' />
                </div>
            </div>
        </section>
    )
}

export default About