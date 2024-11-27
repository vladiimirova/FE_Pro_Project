function ContactsInf(): JSX.Element {
  return (
    <div className="bg-custom-light-blue flex justify-center">
      <div className="container">
        <div className="py-8 px-4">
          <div className="flex flex-col gap-6 max-w-3xl mx-auto">
            <div className="p-6 bg-white shadow">
              <h3 className="text-xl font-roboto font-bold mb-2">Адреса</h3>
              <a
                href="https://www.google.com.ua/maps/place/вулиця+Центральна,+123,+Київська+область/@50.3106228,30.6641123,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4c102b0a7592b:0xc35eb418269aa358!8m2!3d50.3106194!4d30.6666872?hl=ru&entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
                className="text-gray hover:text-hover"
              >
                м. Київ, вул. Центральна, 123
              </a>
              <p className="text-gray"></p>
            </div>

            <div className="p-6 bg-white shadow">
              <h3 className="text-xl font-roboto font-bold mb-2">Телефон</h3>
              <p>
                <a
                  href="tel:+380123456789"
                  className="text-gray hover:text-hover"
                >
                  +380 (12) 345-67-89
                </a>
              </p>
            </div>

            <div className="p-6 bg-white shadow">
              <h3 className="text-xl font-semibold mb-2">Електронна пошта</h3>
              <p>
                <a
                  href="mailto:info@chipchange.ua"
                  className="text-gray hover:text-hover"
                >
                  info@chipchange.ua
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactsInf;
