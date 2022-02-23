import React from 'react'
import { VscServerProcess } from 'react-icons/vsc'
import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si';
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
                    <div className="card">
                        <Card icon={<SiHiveBlockchain className='icon' />} title='Reliable, tamper-proof network' text='Use decentralization, trusted nodes, premium data, and cryptographic proofs to connect highly accurate and available data/APIs to any smart contract.' />
                    </div>
                    <div className="card">
                        <Card icon={<SiStrapi className='icon' />} title='Seamless connection to any API' text='Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain.' />
                    </div>
                    <div className="card">
                        <Card icon={<SiFsecure className='icon' />} title='Proven, ready-made solutions' text='Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications.' />
                    </div>
                    <div className="card">
                        <Card icon={<VscServerProcess className='icon' />} title='Secure off-chain computation' text='Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers.' />
                    </div>
                </div>
                <div className='about_btn'>
                     <button className='btn'>Use Defi</button>
                </div>
            </div>
        </section>
    )
}

export default About