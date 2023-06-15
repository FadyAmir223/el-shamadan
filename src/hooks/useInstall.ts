import { pwaInstallHandler } from 'pwa-install-handler';
import { useEffect, useState } from 'react';

const useInstall = () => {
  const [canInstall, setCanInstall] = useState(false);

  useEffect(() => {
    const handler = (canInstall) => {
      if (canInstall) setCanInstall(true);
    };

    pwaInstallHandler.addListener(handler);

    return () => {
      pwaInstallHandler.removeListener(handler);
    };
  }, []);

  return canInstall;
};

export default useInstall;
