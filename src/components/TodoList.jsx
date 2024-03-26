import React, { useContext, useState } from 'react';
import Button from './Button';
import TodoItem from './TodoItem';
import TodoContext from '../contexts/TodoContext';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteAllTodos,
  deleteCompletedTodos,
} from '../redux/slices/todoSlice';

const TodoList = () => {
  {
    // todos,
    // deleteAllTodos,
    // deleteCompletedTodos,
    // deleteSingleTodo,
    // toggleTodo,
  }

  const [filterType, setFilterType] = useState('all');
  const todos = useSelector((state) => state.todo.todos);
  // const { todos, deleteAllTodos, deleteCompletedTodos } =
  //   useContext(TodoContext);
  const dispatch = useDispatch();

  const filterTodos = (todos) => {
    if (filterType === 'done') {
      return todos.filter((item) => item.completed);
    } else if (filterType === 'todo') {
      return todos.filter((item) => !item.completed);
    } else {
      return todos;
    }
  };
  return (
    <div className='mt-10'>
      <h3 className='text-center text-3xl'>Todo List</h3>
      {todos.length ? (
        <>
          <div className='grid grid-cols-3 gap-4 mt-10 my-10'>
            <Button
              title='All'
              background={filterType === 'all' ? 'bg-cyan-500' : 'bg-cyan-400'}
              clbFunc={() => setFilterType('all')}
            />
            <Button
              title='Done'
              background={filterType === 'done' ? 'bg-cyan-500' : 'bg-cyan-400'}
              clbFunc={() => setFilterType('done')}
            />
            <Button
              title='Todo'
              background={filterType === 'todo' ? 'bg-cyan-500' : 'bg-cyan-400'}
              clbFunc={() => setFilterType('todo')}
            />
          </div>
          <div className='grid grid-cols-1 gap-2 mb-10'>
            {filterTodos(todos).map((item) => (
              <TodoItem
                key={item.id}
                item={item}
                // deleteSingleTodo={deleteSingleTodo}
                // toggleTodo={toggleTodo}
              />
            ))}
          </div>
          <div className='grid grid-cols-2 gap-4 '>
            <Button
              title='Delete done tasks'
              background='bg-red-600'
              clbFunc={() => dispatch(deleteCompletedTodos())}
            />
            <Button
              title='Delete all tasks'
              background='bg-red-600'
              clbFunc={() => dispatch(deleteAllTodos())}
            />
          </div>
        </>
      ) : (
        <div className='text-center text-red-500 text-lg my-10'>
          No todos found
        </div>
      )}
    </div>
  );
};

export default TodoList;
