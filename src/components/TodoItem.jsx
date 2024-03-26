import React, { useContext } from 'react';
import IconButton from './IconButton';
import {
  deleteSingleTodo,
  toggleTodo,
  selectTodo,
} from '../redux/slices/todoSlice';
import { useDispatch } from 'react-redux';

const TodoItem = ({ item }) => {
  const isChecked = item.completed;
  const dispatch = useDispatch();
  // const { deleteSingleTodo, toggleTodo, selectTodo } = useContext(TodoContext);
  return (
    <div className='border-2 rounded py-3 px-5 flex'>
      <p
        className={`flex-1 text-lg ${isChecked && 'text-red-500 line-through'}`}
      >
        {item.title}
      </p>
      <div className='grid grid-cols-3 gap-4'>
        <IconButton
          type={isChecked ? 'checked' : 'unchecked'}
          clbFunc={() => dispatch(toggleTodo(item.id))}
        />
        <IconButton type='edit' clbFunc={() => dispatch(selectTodo(item))} />
        <IconButton
          clbFunc={() => dispatch(deleteSingleTodo(item))}
          type='delete'
        />
      </div>
    </div>
  );
};

export default TodoItem;
