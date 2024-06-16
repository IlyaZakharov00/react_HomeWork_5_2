import React from 'react';
import {CurrencyRate} from './CurrencyRate';

/**
 * Компонент отображения списка курса вылют
 */

export const CurrencyRatesList: React.FC = () => {
  const currencyRates = [
    { currencyName: 'USD MOEX', rate: 63.52, yesterdayRate: 62.02 },
    { currencyName: 'EUR MOEX', rate: 70.86, yesterdayRate: 69.52 },
    { currencyName: 'Нефть', rate: 64.90, yesterdayRate: 70.00 },
  ];

  return (
    <div className='currency-rate'>
      {currencyRates.map((currency, index) => (
        <CurrencyRate key={index} {...currency} />
      ))}
    </div>
  );
};

