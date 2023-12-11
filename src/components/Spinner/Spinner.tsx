import { FC } from 'react';
import { IonSpinner } from '@ionic/react';

import './Spinner.scss';

const Spinner: FC = () => {
  return (
    <div className='spinner'>
      <IonSpinner name='bubbles' color='tertiary' />
    </div>
  );
};

export default Spinner;