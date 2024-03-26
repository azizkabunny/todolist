import { createContext, useState } from 'react';
import { v4 as uuidV4 } from 'uuid'

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Learn react',
      completed: true,
    },
    {
      id: 2,
      title: 'Learn html',
      completed: false,
    },
    {
      id: 3,
      title: 'Learn css',
      completed: false,
    },
  ]);

  const addTodo = (inputText) => {
    const newTodo = {
      id: uuidV4(),
      completed: false,
      title: inputText,
    };
    setTodos([newTodo, ...todos]);
  };

  const selectTodo = (id) => {
    setTodos(
      todos.map((item) => ({
        ...item,
        selected: item.id === id ? true : false,
      }))
    )
  }

  const cancelSelectTodo = ( )=> {
    setTodos(todos.map((item) => ({...item, selected: false})))
  }

  const updateTodo = (id, newTitle) => {
    setTodos(
      todos.map((item) =>
      item.id === id ? {
      ...item,
      title: newTitle,
      selected: false,
    }
    : item
      )
    );
  }

  const deleteAllTodos = () => {
    setTodos([]);
  };

  const deleteCompletedTodos = () => {
    setTodos(todos.filter((item) => !item.completed));
  };

  const deleteSingleTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id
          ? {
              ...item,
              completed: !item.completed,
            }
          : item
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todos: todos,
        addTodo: addTodo,
        deleteAllTodos: deleteAllTodos,
        deleteCompletedTodos: deleteCompletedTodos,
        deleteSingleTodo: deleteSingleTodo,
        toggleTodo: toggleTodo,
        selectTodo: selectTodo,
        cancelSelectTodo: cancelSelectTodo,
        updateTodo: updateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
