import React from 'react'
import './Block.scss';


export type BlockPropsType = {
  value: number
  currency: string
  onChangeValue: (cur: any) => void
  onChangeCurrency: (cur: any) => void
}

const defaultCurrencies = ['RUB', 'USD', 'EUR', 'GBP'];

export const Block = ({value, currency, onChangeValue, onChangeCurrency}: BlockPropsType) => {

  return (
    <div className="block">

      <div className="currencies">
        {defaultCurrencies.map((cur) => (
          <button
            className={currency === cur ? 'active' : ''}
            onClick={() => onChangeCurrency(cur)}
            key={cur}>
            {cur}
          </button>
        ))}
      </div>


      <input
        onChange={(e) => onChangeValue(e.target.value)}
        value={value}
      />
    </div>
  );
}
