function CabinetInf() {
  return (
    <div className="bg-custom-light-blue flex justify-center">
      <div className="container">
        {/* Основное содержимое */}
        <div className="py-8 px-4">
          <div className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Ваші дані
            </h3>

            {/* Информация о пользователе */}
            <div className="mb-6">
              <p className="mb-2">
                <strong className="font-medium">Ім'я:</strong> Іван Іваненко
              </p>
              <p className="mb-2">
                <strong className="font-medium">Email:</strong>{" "}
                ivan.ivanenko@example.com
              </p>
              <p className="mb-2">
                <strong className="font-medium">Дата реєстрації:</strong>{" "}
                01.01.2024
              </p>
            </div>

            {/* Управление аккаунтом */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-4">Керування акаунтом</h4>
              <button className="w-full md:w-auto mb-4 md:mb-0 md:mr-4 px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition">
                Змінити пароль
              </button>
              <button className="w-full md:w-auto px-6 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition">
                Видалити акаунт
              </button>
            </div>

            {/* История операций */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Історія операцій</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>01.11.2024 - Обмін USD → EUR (100 USD → 90 EUR)</li>
                <li>15.10.2024 - Обмін GBP → USD (50 GBP → 65 USD)</li>
                <li>05.10.2024 - Поповнення рахунку (200 USD)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CabinetInf;
