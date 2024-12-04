export interface BtnProps {
    className?: string; 
    to?: string;        
    text: string;       
    onClick?: () => void; 
  }

export interface HistoryInfProps {
    date: string;
    haveMoney: string;
    wantMoney: string;
    fromCurrency: string;
    toCurrency: string;
  }

export interface HistoryTitleProps {
    onClear: () => void;
  }
  

export interface HistoryItem {
    date: string;
    haveMoney: string;
    wantMoney: string;
    fromCurrency: string;
    toCurrency: string;
  }
  
  export  interface ConverterHistoryProps {
    history: HistoryItem[];
    onClear: () => void;
  }

  export interface CurrencyInputProps {
    id: string;
    currencyId: string;
    label: string;
    register: any;
    error: Record<string, { message?: string }> | undefined;
    currencies: string[];
    currencyValue: string;
    placeholder: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeCurrency?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    value?: string;
  }
  
  export interface DateInputProps {
    id: string;
    register: any; 
    error: { message?: string } | undefined;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  }

  export interface FormData {
    haveMoney: string;
    wantMoney: string;
    fromCurrency: 'UAH' | 'USD' | 'EUR' | 'GBP';
    toCurrency: 'UAH' | 'USD' | 'EUR' | 'GBP';
    date: string;
  }
  
  export interface ConverterCalculatorProps {
    addToHistory: (newRecord: any) => void;
  }