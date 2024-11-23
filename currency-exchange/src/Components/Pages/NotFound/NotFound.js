function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-700">
      <h1 className="text-9xl font-extrabold text-blue-500">404</h1>
      <p className="text-2xl md:text-3xl font-semibold mt-4">
        Сторінку не знайдено
      </p>
      <p className="text-lg mt-2 text-gray-500">
        Можливо, вона була видалена або ви ввели неправильний URL.
      </p>
      <a
        href="/"
        className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded-md shadow-md hover:bg-blue-600 transition"
      >
        Повернутись на головну
      </a>
    </div>
  );
}

export default NotFound;
