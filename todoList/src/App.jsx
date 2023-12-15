import { useState } from 'react';
import "./App.css";
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';

function App() {
  const [todos, setTodos] = useState({
    todos: [
      {
        id: 1,
        text: "Criar uma funcionalidade no sistema",
        category: "Trabalho",
        isCompleted: false,
      },
      {
        id: 2,
        text: "Ir para casa",
        category: "Pessoal",
        isCompleted: false,
      },
      {
        id: 3,
        text: "Estudar React",
        category: "Estudos",
        isCompleted: false,
      }
    ]
  });

  const [search, setSearch] = useState("");

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos.todos, {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false
      }
    ];
    setTodos({ todos: newTodos });
  }

  const removeTodo = (id) => {
    const newTodos = [...todos.todos];
    const filteredTodos = newTodos.filter(todo => todo.id !== id);
    setTodos({ todos: filteredTodos });
  }

  const completeTodo = (id) => {
    const newTodos = [...todos.todos];
    setTodos({
      todos: newTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      ),
    });
  };




  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter />
      <div className="todo-list">
        {todos.todos.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())).map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
        ))}

      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
