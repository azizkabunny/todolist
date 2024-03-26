import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  todos: [
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
  ],
  selectedTodo: null,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: uuidv4(),
        completed: false,
        title: action.payload,
      };

      state.todos = [newTodo, ...state.todos];
    },

    toggleTodo: (state, action) => {
      state.todos = state.todos.map((item) =>
        item.id == action.payload
          ? {
              ...item,
              completed: !item.completed,
            }
          : item
      );
    },

    selectTodo: (state, action) => {
      state.selectedTodo = action.payload;
    },

    unSelectTodo: (state) => {
      state.selectedTodo = null;
    },

    updateTodo: (state, action) => {
      return {
        todos:  state.todos.map((item) =>
        item.id === state.selectedTodo.id
          ? {
              ...selectTodo,
              title: action.payload,
            }
          : item
      ),
      selectedTodo: null,
      }
    },

    deleteSingleTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((item) => item.id !== id);
    },
    deleteCompletedTodos: (state) => {
      state.todos = state.todos.filter((item) => !item.completed);
    },
    deleteAllTodos: (state) => {
      state.todos = [];
    },
  },
});

export const {
  addTodo,
  deleteSingleTodo,
  deleteCompletedTodos,
  deleteAllTodos,
  toggleTodo,
  selectTodo,
  unSelectTodo,
  updateTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
