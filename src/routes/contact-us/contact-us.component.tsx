import { useTranslation } from 'react-i18next';

const ContactUs = () => {
  const [t] = useTranslation('contact');

  return (
    <div className="contain py-8">
      <div className="w-full max-w-md mx-auto">
        <form>
          <div className="mb-4">
            <input type="text" placeholder={t('name')} className="form-input" />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder={t('email')}
              className="form-input"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder={t('message')}
              className="form-input"
              rows={5}
            ></textarea>
          </div>
          <button
            type="button"
            className="bg-purple text-white py-2 px-4 rounded hover:bg-purple/80"
          >
            {t('submit')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
