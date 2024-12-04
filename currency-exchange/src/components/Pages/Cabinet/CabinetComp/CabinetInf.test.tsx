import React from 'react';
import { render, screen } from '@testing-library/react';
import CabinetInf from './CabinetInf';

describe('CabinetInf component', function() {
  test('Отображает данные пользователя', function() {
    render(<CabinetInf />);

    expect(screen.getByText("Іван Іваненко")).toBeInTheDocument();
    expect(screen.getByText("ivan.ivanenko@example.com")).toBeInTheDocument();
    expect(screen.getByText("01.01.2024")).toBeInTheDocument();
  });

  test('Отображает кнопки для управления аккаунтом', function() {
    render(<CabinetInf />);

    const changePasswordButton = screen.getByText("Змінити пароль");
    const deleteAccountButton = screen.getByText("Видалити акаунт");

    expect(changePasswordButton).toBeInTheDocument();
    expect(deleteAccountButton).toBeInTheDocument();
  });

  test('Отображает историю операций', function() {
    render(<CabinetInf />);

    expect(screen.getByText("01.11.2024 - Обмін USD → EUR (100 USD → 90 EUR)")).toBeInTheDocument();
    expect(screen.getByText("15.10.2024 - Обмін GBP → USD (50 GBP → 65 USD)")).toBeInTheDocument();
    expect(screen.getByText("05.10.2024 - Поповнення рахунку (200 USD)")).toBeInTheDocument();
  });

  test('Проверка кнопок с правильными стилями', function() {
    const { container } = render(<CabinetInf />);

    const changePasswordButton = container.querySelector('button.bg-blue-500');
    const deleteAccountButton = container.querySelector('button.bg-red-500');

    expect(changePasswordButton).toHaveClass('bg-blue-500');
    expect(changePasswordButton).toHaveClass('hover:bg-blue-600');

    expect(deleteAccountButton).toHaveClass('bg-red-500');
    expect(deleteAccountButton).toHaveClass('hover:bg-red-600');
  });
});
