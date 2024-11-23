function ServicesSection() {
  return (
    <div className="bg-custom-light-blue flex justify-center">
      <div className="container">
        <div className="py-8 px-4">
          <div className="flex flex-wrap justify-center gap-6">
            {/* Услуга 1 */}
            <div className="bg-white p-6 shadow-md flex-1 max-w-sm">
              <h3 className="text-xl font-semibold mb-2">Обмін валют</h3>
              <p className="text-gray-600">
                Швидкий та надійний обмін валют за вигідними курсами.
              </p>
            </div>

            {/* Услуга 2 */}
            <div className="bg-white p-6 shadow-md flex-1 max-w-sm">
              <h3 className="text-xl font-semibold mb-2">Конвертер валют</h3>
              <p className="text-gray-600">
                Перевірка курсів валют у реальному часі та їх конвертація.
              </p>
            </div>

            {/* Услуга 3 */}
            <div className="bg-white p-6 shadow-md flex-1 max-w-sm">
              <h3 className="text-xl font-semibold mb-2">Консультації</h3>
              <p className="text-gray-600">
                Отримайте професійні поради щодо обміну валют та фінансових
                операцій.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
