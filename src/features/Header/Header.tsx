import React from 'react';
import s from './Header.module.css'


export const Header = () => {
  return (
    <div className={s.header}>
      <h1 className={s.headerLogoText}>Froggy Todolist</h1>

      <div className={s.headerLinkGroup}>
        <button onClick={() => alert('click')}>click</button>
      </div>

    </div>
  )
}