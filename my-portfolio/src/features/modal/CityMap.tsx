import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/useHooks';
import { openModal } from '@/entities/modal/modalSlice';

const CityMap: React.FC = () => {
  const locations = useAppSelector((state) => state.city.locations);

  const dispatch = useAppDispatch();

  const handleClick = (taskId?: string) => {
    if (taskId) {
      dispatch(openModal(taskId));
    }
  };

  return (
    <div
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: '#eee',
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      {locations.map((loc) => (
        <div
          key={loc.id}
          onClick={() => handleClick(loc.taskId)}
          style={{
            width: 120,
            height: 120,
            backgroundColor: loc.hasTask ? '#ffcc00' : '#999',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: loc.hasTask ? 'pointer' : 'default',
            userSelect: 'none',
          }}
        >
          {loc.name}
        </div>
      ))}
    </div>
  );
};

export default CityMap;
