import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Схема валидации с использованием Zod
const schema = z.object({
  name: z
    .string()
    .min(2, "Ім'я має бути не менше 2 символів")
    .max(50, "Ім'я занадто довге"),
  email: z.string().email("Невірний формат email"),
  question: z.string().min(10, "Питання має бути не менше 10 символів"),
});

function QuestionsForm() {
  // Инициализация React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema), // Подключение Zod для валидации
  });

  // Функция обработки отправки формы
  const onSubmit = (data) => {
    console.log("Форма отправлена:", data);
    alert("Ваше питання було успішно надіслано!");
  };

  return (
    <div className="bg-custom-light-blue flex justify-center">
      <div className="container">
        <div className="py-8 px-4">
          <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Напишіть нам
            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Поле для имени */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Ваше ім'я
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Введіть ваше ім'я"
                  {...register("name")}
                  className={`w-full p-3 border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 ${
                    errors.name ? "focus:ring-red-400" : "focus:ring-blue-400"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Поле для email */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Ваш Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Введіть ваш email"
                  {...register("email")}
                  className={`w-full p-3 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 ${
                    errors.email ? "focus:ring-red-400" : "focus:ring-blue-400"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Поле для вопроса */}
              <div className="mb-4">
                <label
                  htmlFor="question"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Ваше питання
                </label>
                <textarea
                  id="question"
                  placeholder="Напишіть ваше питання"
                  rows="5"
                  {...register("question")}
                  className={`w-full p-3 border ${
                    errors.question ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 ${
                    errors.question
                      ? "focus:ring-red-400"
                      : "focus:ring-blue-400"
                  }`}
                ></textarea>
                {errors.question && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.question.message}
                  </p>
                )}
              </div>

              {/* Кнопка отправки */}
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors"
              >
                Надіслати питання
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionsForm;
