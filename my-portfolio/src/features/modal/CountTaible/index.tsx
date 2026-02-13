import { useAppSelector } from '@/hooks/useHooks';
import style from './index.module.scss';

type CountTableProps = {
  time: string;
};

export default function CountTaible({ time }: CountTableProps) {
  const { price, day } = useAppSelector((state) => state.game);

  return (
    <div className={style.CountTaible}>
      <div>
        <h3>{day} Дней</h3>
        <h3>{time}</h3>
        <h3>{price}$</h3>
      </div>
    </div>
  );
}
