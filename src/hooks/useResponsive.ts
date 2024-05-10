import { useEffect, useState } from 'react';

const useResponsive = () => {
  const [deviceType, setDeviceType] = useState<'mobile' | 'desktop' | null>(null);

  useEffect(() => {
    const checkDeviceType = () => {
      const isMobile = window.innerWidth < 768; // Exemplo de breakpoint para dispositivos móveis (768 pixels)
      setDeviceType(isMobile ? 'mobile' : 'desktop');
    };

    checkDeviceType();

    window.addEventListener('resize', checkDeviceType);

    return () => {
      window.removeEventListener('resize', checkDeviceType);
    };
  }, []);

  return deviceType;
};

export default useResponsive;