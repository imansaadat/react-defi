import React from 'react'
import developers from '../../assets/terminal.png'
import './Developers.css'
const Developers = () => {
    return (
        <section className='developers'>
            <div className='container'>
                <div className='developers_content'>
                    <div className='developers_text'>
                        <h2 className='title'>Superpowers for DEFI developers.</h2>
                        <p className='text'>Checkout the <span>documentation</span> , the <span>quick start</span> or a guide below to integrate your project with thousands of tokens and billions of liquidity.</p>
                    </div>
                    <div className='developers_image'>
                        <img src={developers}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Developers