import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'


const Header = () => {
  return (
      <div className="gpt4__header " id="home">
        <div className='gpt4__header-content'>

          <h1 className='gradient__text'>Lets Build Something amazing with&nbsp;<span className='gradient__text gradient__text-reactword'>React</span></h1>

          <p>Fully Responsive Modern UI/UX Website in React.  </p>

          <div className='gpt4__header-content__input'>
            <input type='email' placeholder='Your email here'></input>
            <button type="button">Get Started</button>  
          </div>

          <div className='gpt4__header-content__people'>
            <img src={people} alt="people"></img>
            <p>1600 people requested access to visit in last 24 hrs</p>
          </div>
          </div>


          <div className='gpt4__header-image'>
            <img src={ai} alt='ai' />
          </div>

      </div>
  
  )
}

export default Header
