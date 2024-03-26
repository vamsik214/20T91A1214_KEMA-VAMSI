import React, { useState } from 'react'
import { Button } from '../button/Button'
import './card.css'


export const Card = ({card}) => {
  const [show,setShow] = useState(false);
  function buttonClick(){
    setShow(!show);
  }
  return (
  <div className={show? "card show": "card"}>
      <div className="image">
        <img src={card.url} alt="" />
      </div>
      <h3>{card.title}</h3>
      {
        show && <p>{card.description}</p>
      }
      <Button buttonClick = {buttonClick} show={show}/>
    </div>
  )
}
