import React from 'react'
import './Subscribe.css'
const Subscribe = () => {
  return (
   <section className='subscribe'>
        <div className='container'>
            <div className='subscribe_content'>
                <h2 className='title'>Join Our DeFi Community</h2>
                 <form>
                     <div className='field_block'>
                        <input type='email' name='email' className='email' placeholder='Enter your email' />
                        <button className="btn">Sign Up</button>
                     </div>
                     <div className='field_block'>
                        <input type='checkbox'/>
                        <p className='text'>Yes, I agree to receive email communications from DeFi.</p>
                     </div>
                 </form>
            </div>
        </div>
   </section>
  )
}

export default Subscribe