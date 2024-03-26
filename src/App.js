import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./contexts/TodoContext";

function App() {

  return (
    <TodoProvider> 
    <div className='container mx-auto py-10'>
    <TodoInput />
    <TodoList />
    </div>
    </TodoProvider>
  );
}

export default App;
