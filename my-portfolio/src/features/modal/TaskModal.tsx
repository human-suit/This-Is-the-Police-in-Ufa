import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/useHooks';
import { closeModal } from '@/entities/modal/modalSlice';

const TaskModal: React.FC = () => {
  const { isOpen, taskId } = useAppSelector(state => state.modal);
  const dispatch = useAppDispatch();

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
      }}
      onClick={() => dispatch(closeModal())}
    >
      <div
        style={{ backgroundColor: '#fff', padding: 20, borderRadius: 8 }}
        onClick={e => e.stopPropagation()}
      >
        <h2>Задача {taskId}</h2>
        <p>Описание задачи здесь...</p>
        <button onClick={() => dispatch(closeModal())}>Закрыть</button>
      </div>
    </div>
  );
};

export default TaskModal;