import { pwaInstallHandler } from 'pwa-install-handler';

const InstallBtn = ({ text }) => {
  const handleInstall = () => {
    pwaInstallHandler.install();
  };

  return (
    <button
      className="ltr:font-bold text-base tracking-wide capitalize px-3 py-1 bg-white dark:bg-black dark:text-white rounded-full text-purple"
      onClick={handleInstall}
    >
      {text}
    </button>
  );
};

export default InstallBtn;
