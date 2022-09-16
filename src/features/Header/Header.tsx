import React from 'react';
import s from './Header.module.css'


export const Header = () => {
  return (
    <div className={s.header}>
      <h1 className={s.headerLogoText}>Todolist</h1>
    </div>
  )
}