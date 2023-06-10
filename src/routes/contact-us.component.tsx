import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '../components/footer.component';
import { useTitle } from '../hooks/useTitle';

const ContactUs = () => {
  const [t] = useTranslation('contact');
  const formRef = useRef(null);
  const [msg, setMsg] = useState('');

  useTitle('contact us');

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      setMsg('');
    }, 3000);

    const form = formRef.current;

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    if (!(name && email && message)) return setMsg(t('errorMsg'));

    setMsg(t('successMsg'));

    form.reset();
  };

  return (
    <>
      <article className="contain py-8">
        <div className="w-full max-w-md mx-auto">
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder={t('name')}
              className="form-input mb-4"
            />
            <input
              type="email"
              name="email"
              placeholder={t('email')}
              className="form-input mb-4"
            />
            <textarea
              name="message"
              placeholder={t('message')}
              className="form-input"
              rows={5}
            ></textarea>
            <p className="h-8 text-red ltr:font-bold ltr:dark:font-normal">
              {msg}
            </p>
            <button type="submit" className="form-button">
              {t('submit')}
            </button>
          </form>
        </div>
      </article>
      <Footer />
    </>
  );
};

export default ContactUs;
