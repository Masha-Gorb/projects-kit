import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Block} from "./Block";

export const CurrencyPage = () => {

  // const [rates, setRates] = useState({})
  const ratesRef = useRef({})
  const [fromCurrency, setFromCurrency] = useState('RUB')
  const [toCurrency, setToCurrency] = useState('USD')
  const [fromPrice, setFromPrice] = useState(0)
  const [toPrice, setToPrice] = useState(1)

  const onChangeFromPrice = (value: any) => {
    // @ts-ignore
    const price = value / ratesRef.current[fromCurrency]
    // @ts-ignore
    const result = price * ratesRef.current[toCurrency]
    setFromPrice(value)
    setToPrice(result)
  }
  const onChangeToPrice = useCallback((value: any) => {
    // @ts-ignore
    const result = (ratesRef.current[fromCurrency] / ratesRef.current[toCurrency]) * value
    setFromPrice(result)
    setToPrice(value)
  }, [fromCurrency, toCurrency])

  useEffect(() => {
    fetch('https://cdn.cur.su/api/latest.json')
      .then((res) => res.json())
      .then((json) => {
        ratesRef.current = json.rates
        onChangeToPrice(1);
      })
      .catch((error) => {
        alert('сорри, ошибка, попробуйте еще раз')
      })
  }, [onChangeToPrice])


  return (
    <div className="App">
      <Block value={toPrice}
             currency={toCurrency}
             onChangeCurrency={setToCurrency}
             onChangeValue={onChangeToPrice}/>
      <Block value={fromPrice}
             currency={fromCurrency}
             onChangeCurrency={setFromCurrency}
             onChangeValue={onChangeFromPrice}/>
    </div>
  )
}
