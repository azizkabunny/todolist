import React, { useContext, useEffect, useRef } from 'react';
import Button from './Button';
import TodoContext from '../contexts/TodoContext';
import {
  addTodo,
  selectTodo,
  unSelectTodo,
  updateTodo,
} from '../redux/slices/todoSlice';
import { useDispatch, useSelector } from 'react-redux';

const TodoInput = () => {
  const inputRef = useRef(null);
  const selectedTodo = useSelector((state) => state.todo.selectedTodo);

  useEffect(() => {
    if (selectedTodo) {
      inputRef.current.value = selectedTodo.title;
    }
  }, [selectedTodo]);

  const dispatch = useDispatch();
  const submit = (e) => {
    e.preventDefault();
    if (selectedTodo) {
      dispatch(updateTodo(inputRef.current.value));
    } else {
      dispatch(addTodo(inputRef.current.value));
    }

    inputRef.current.value = null;
    //   if (selectedTodo) {
    //     updateTodo(selectedTodo.id, inputRef.current.value);
    //   } else {
    //     addTodo(inputRef.current.value);
    //   }
    //   inputRef.current.value = null;
  };
  return (
    <div>
      <h3 className='text-center text-3xl'>Todo Input</h3>
      <form onSubmit={submit} className='border-2 py-5 px-5 rounded'>
        <div className=' flex mb-10 relative'>
          <span
            className='bg-cyan-600 p-2 rounded-l 
          flex items-center justify-center'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 text-white'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75'
              />
            </svg>
          </span>
          <input
            ref={inputRef}
            required
            placeholder='New Todo'
            className='flex-1 p-2 text-lg border-2 border-l-0 rounded-r'
          />
          {selectedTodo && (
            <button
              onClick={() => {
                dispatch(unSelectTodo());
                inputRef.current.value = null;
              }}
              type='button'
              className='absolute h-full p-2 right-2'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18 18 6M6 6l12 12'
                />
              </svg>
            </button>
          )}
        </div>
        <Button title={selectedTodo ? 'Update todo' : 'Add new task'} />
      </form>
    </div>
  );
};

export default TodoInput;
