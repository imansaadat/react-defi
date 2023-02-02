import React from 'react'
import { VscServerProcess } from 'react-icons/vsc'
import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si';
import Button from '../Button/Button';
import AboutItem from './AboutItem'
import './About.css'
const About = () => {
    const data = [
        {
            icon: <SiHiveBlockchain />,
            title: 'Reliable, tamper-proof network',
            desc: 'Use decentralization, trusted nodes, premium data, and cryptographic proofs to connect highly accurate and available data/APIs to any smart contract.'
        },
        {
            icon: <SiStrapi />,
            title: 'Seamless connection to any API',
            desc: 'Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain.'
        },
        {
            icon: <SiFsecure />,
            title: 'Proven, ready-made solutions',
            desc: 'Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications.'
        },
        {
            icon: <VscServerProcess />,
            title: 'Secure off-chain computation',
            desc: 'Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers.'
        },
    ]
    return (
        <section className='about'>
            <div className='container'>
                <div className='heading'>
                    <h2>A Growing Protocol Ecosystem</h2>
                    <p>The Defi protocol system empowers developers, liquidity providers, and traders to participate in a financial marketplace that is open and accessible to all.</p>
                </div>
                <div className='cards_container'>
                   {
                    data.map((item,index)=>(
                       <AboutItem key={index} item={item}/>
                    ))
                   }
                </div>
                <div className='about_btn'>
                   <Button text='Use Defi' BtnType='btn' />
                </div>
            </div>
        </section>
    )
}

export default About