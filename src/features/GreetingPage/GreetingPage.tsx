import React from 'react';
import s from './GreetingPage.module.css'
import froggy1 from '../../asserts/froggyGIFs/froggy1.gif'

export const GreetingPage = () => {
  return (
    <div className={s.greetingPage}>
      <img alt='' className={s.img} src={froggy1}/>
      <div className={s.greetingText}>
        <span>Привет!</span>
        <br/>
        <span>Это моя личная библиотека небольших компонент, которые я разрабатывала для разных нужд</span>
      </div>
    </div>
  )
}
