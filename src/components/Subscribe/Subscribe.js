import React from 'react'
import Button from '../Button/Button'
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
                        <Button text='Sign Up' BtnType='btn outline' />
                     </div>
                     <div className='field_block'>
                        <input type='checkbox' id='checkbox' className='checkBox'/>
                        <label htmlFor='checkbox' className='label'>Yes, I agree to receive email communications from DeFi.</label>
                     </div>
                 </form>
            </div>
        </div>
   </section>
  )
}

export default Subscribe