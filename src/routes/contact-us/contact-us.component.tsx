import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '../../components/footer/footer.component';

const ContactUs = () => {
  const [t] = useTranslation('contact');
  const formRef = useRef(null);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    document.title = 'contact us';
    return () => {
      document.title = 'el-shamedan';
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    if (!(name && email && message)) return setMsg(t('errorMsg'));

    setMsg(t('successMsg'));
    form.reset();
  };

  useEffect(() => {
    if (!msg) return;

    const timeout = setTimeout(() => {
      setMsg('');
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [msg]);

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
            <p className="h-8 text-red">{msg}</p>
            <button
              type="submit"
              className="bg-purple text-white py-2 px-4 rounded hover:bg-purple/80"
            >
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
