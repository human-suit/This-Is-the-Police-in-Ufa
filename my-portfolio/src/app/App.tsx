import React from 'react';
import style from './styles/index.module.scss';
import { CityMap, CountTaible } from '@features/';
import map from '@shared/assets/UF.png';

const App: React.FC = () => {
  const now = new Date();

  const day = now.getDate();
  const time = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  const price = 421312;

  return (
    <div className={style.container}>
      <CountTaible time={time} />
      <div>
        <img src={map} alt="Map" />
      </div>
    </div>
  );
};

export default App;
