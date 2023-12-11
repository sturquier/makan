import { ToastOptions, useIonToast } from '@ionic/react';

export interface IToast {
  message: string;
  color: ToastOptions['color'];
}

export const useToast = (): (payload: IToast) => void => {
  const [present] = useIonToast();

  const showToast = (payload: IToast): void => {
    const { color, message } = payload;

    present({
      position: 'bottom',
      duration: 3000,
      color,
      message
    });
  };

  return showToast;
};