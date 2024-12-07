import { create } from 'zustand';
import { ConverterState } from '../Interfaces/Interfaces';

export const useConverterStore = create<ConverterState>(function (set) {
  return {
    currencyFrom: 'UAH',
    currencyTo: 'USD',
    fromValue: '1000',
    toValue: '38.7',
    exchangeRate: null,
    selectedDate: new Date(),
    fromError: null,
    toError: null,
    history: JSON.parse(localStorage.getItem('conversionHistory') || '[]'),

    setCurrencyFrom: function (currency) {
      set({ currencyFrom: currency });
    },

    setCurrencyTo: function (currency) {
      set({ currencyTo: currency });
    },

    setFromValue: function (value) {
      set({ fromValue: value });
    },

    setToValue: function (value) {
      set({ toValue: value });
    },

    setExchangeRate: function (rate) {
      set({ exchangeRate: rate });
    },

    setSelectedDate: function (date) {
      set({ selectedDate: date });
    },

    setFromError: function (error) {
      set({ fromError: error });
    },

    setToError: function (error) {
      set({ toError: error });
    },

    addToHistory: function (record) {
      set(function (state) {
        if (
          !state.history.some(function (r) {
            return (
              r.date === record.date &&
              r.haveMoney === record.haveMoney &&
              r.wantMoney === record.wantMoney
            );
          })
        ) {
          const updatedHistory = [...state.history, record];
          if (updatedHistory.length > 10) updatedHistory.shift(); 
          localStorage.setItem('conversionHistory', JSON.stringify(updatedHistory));
          return { history: updatedHistory };
        }
        return state;
      });
    },

    clearHistory: function () {
      localStorage.removeItem('conversionHistory');
      set({ history: [] });
    },
  };
});
