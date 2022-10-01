import React from 'react';
import s from './Header.module.css'
import {Button} from "@mui/material";
import {Link} from "react-router-dom";


export const Header = () => {
  return (
    <div className={s.header}>
      <h1 className={s.headerLogoText}>Моя библиотека</h1>
      <Button><Link className={s.headerText} to="/">Приветствие</Link></Button>
      <Button><Link className={s.headerText} to="/todos">Тудулист</Link></Button>
      <Button><Link className={s.headerText} to="/currency">Конвертер валют</Link></Button>
      <Button><Link className={s.headerText} to="/pagination">Пагинация</Link></Button>
    </div>
  )
}