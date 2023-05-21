import { useTranslation } from 'react-i18next';

const ContactUs = () => {
  const [t] = useTranslation('contact');

  return (
    <div className="contain py-8">
      <div className="w-full max-w-md  mx-auto">
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder={t('name')}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder={t('email')}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder={t('message')}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-blue-500"
              rows={5}
            ></textarea>
          </div>
          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            {t('submit')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
