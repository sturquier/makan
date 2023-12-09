import { ToastOptions, useIonToast } from '@ionic/react';

export const useToast = () => {
  const [present] = useIonToast();

  const showToast = (message: string, color: ToastOptions['color']): void => {
    present({
      position: 'bottom',
      duration: 3000,
      color,
      message
    });
  };

  return showToast;
};