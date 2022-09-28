import React, {useEffect, useState} from 'react';
import {Block} from "./Block";

export const CurrencyPage = () => {

  const [rates, setRates] = useState({})
  const [fromCurrency, setFromCurrency] = useState('RUB')
  const [toCurrency, setToCurrency] = useState('USD')
  const [fromPrice, setFromPrice] = useState(0)
  const [toPrice, setToPrice] = useState(0)

  useEffect(() => {
    fetch('https://cdn.cur.su/api/latest.json')
      .then((res) => res.json())
      .then((json) => {
        setRates(json.rates);
      })
  }, [])

  const onChangeFromPrice = (value: any) => {
    // @ts-ignore
    const price = value / rates[fromCurrency]
    // @ts-ignore
    const result = price * rates[toCurrency]
    setFromPrice(value)
    setToPrice(result)
  }
  const onChangeToPrice = (value: any) => {
    // @ts-ignore
    const result = (rates[fromCurrency] / rates[toCurrency]) * value
    setFromPrice(result)
    setToPrice(value)
  }

  return (
    <div className="App">
      <Block value={fromPrice}
             currency={fromCurrency}
             onChangeCurrency={setFromCurrency}
             onChangeValue={onChangeFromPrice}/>
      <Block value={toPrice}
             currency={toCurrency}
             onChangeCurrency={setToCurrency}
             onChangeValue={onChangeToPrice}/>
    </div>
  )
}
