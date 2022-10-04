import React, {useState} from 'react';
import s from './Header.module.css'
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import {InfoButton} from "./InfoButton";

const style = {
  marginLeft: '400px',
  marginTop: '15px'
}

export const Header = () => {
  const[component, setComponent] = useState('')

  return (
    <div className={s.header}>
      <h1 className={s.headerLogoText}>Моя библиотека</h1>
      <Button onClick={() => setComponent('это просто страничка приветствия')}>
        <Link className={s.headerText} to="/">Приветствие</Link>
      </Button>
      <Button onClick={() => setComponent('Простенький тудулист: можно создавать/удалять тудулисты, создавать таски. ' +
        'Данные уходят на фейковый сервер на mockApi')}>
        <Link className={s.headerText} to="/todos">Тудулист</Link>
      </Button>
      <Button onClick={() => setComponent('При переходе сюда отправляется гет-запрос за актуальным курсом. ' +
        'По дефолту установлен 1 доллар в пересчет на русские рубли')}>
        <Link className={s.headerText} to="/currency">Конвертер валют</Link>
      </Button>
      <Button onClick={() => setComponent('Постраничный вывод результата гет-запроса: пишем в поиске название технологии и получаем все статьи на эту тему. ' +
        'По дефолту в поисковой строке указан реакт')}>
        <Link className={s.headerText} to="/pagination">Пагинация</Link>
      </Button>

      <div  style={style}>
        <InfoButton component={component}/>
      </div>

    </div>
  )
}