import { schemaConverter } from './ConverterValidation';
import { z } from 'zod';

describe('schemaConverter', function () {
  it('should validate haveMoney correctly', function () {
    expect(function () { schemaConverter.parse({ haveMoney: '100', wantMoney: '50', date: '2024-12-08' }) }).not.toThrow();
    expect(function () { schemaConverter.parse({ haveMoney: 'abc', wantMoney: '50', date: '2024-12-08' }) })
      .toThrowError('Введіть лише цифри та крапку');
    expect(function () { schemaConverter.parse({ haveMoney: '', wantMoney: '50', date: '2024-12-08' }) })
      .toThrowError('Це поле обов\'язкове');
    expect(function () { schemaConverter.parse({ haveMoney: '-100', wantMoney: '50', date: '2024-12-08' }) })
      .toThrowError('Значення повинно бути позитивним');
  });

  it('should validate wantMoney correctly', function () {
    expect(function () { schemaConverter.parse({ haveMoney: '100', wantMoney: '50', date: '2024-12-08' }) }).not.toThrow();
    expect(function () { schemaConverter.parse({ haveMoney: '100', wantMoney: 'abc', date: '2024-12-08' }) })
      .toThrowError('Введіть лише цифри та крапку');
    expect(function () { schemaConverter.parse({ haveMoney: '100', wantMoney: '', date: '2024-12-08' }) })
      .toThrowError('Це поле обов\'язкове');
    expect(function () { schemaConverter.parse({ haveMoney: '100', wantMoney: '-50', date: '2024-12-08' }) })
      .toThrowError('Значення повинно бути позитивним');
  });

  it('should validate date correctly', function () {
    expect(function () { schemaConverter.parse({ haveMoney: '100', wantMoney: '50', date: '2024-12-08' }) }).not.toThrow();
    expect(function () { schemaConverter.parse({ haveMoney: '100', wantMoney: '50', date: '' }) })
      .toThrowError('Оберіть дату');
    expect(function () { schemaConverter.parse({ haveMoney: '100', wantMoney: '50', date: 'invalid-date' }) })
      .toThrowError('Неправильний формат дати');
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1);
    expect(function () { schemaConverter.parse({ haveMoney: '100', wantMoney: '50', date: futureDate.toISOString() }) })
      .toThrowError('Дата повинна бути в межах сьогоднішнього дня і 7 днів назад');
    const oldDate = new Date();
    oldDate.setDate(oldDate.getDate() - 8);
    expect(function () { schemaConverter.parse({ haveMoney: '100', wantMoney: '50', date: oldDate.toISOString() }) })
      .toThrowError('Дата повинна бути в межах сьогоднішнього дня і 7 днів назад');
  });

  it('should pass with correct values', function () {
    const validData = {
      haveMoney: '100',
      wantMoney: '50',
      date: '2024-12-08',
    };

    expect(function () { schemaConverter.parse(validData) }).not.toThrow();
  });
});
