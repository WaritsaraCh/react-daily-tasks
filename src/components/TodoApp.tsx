import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";
import SearchBar from "./SearchBar";
import Header from "./Header";
export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}
type FilterType = "all" | "active" | "completed";
const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [filter, setFilter] = useState<FilterType>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);
  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: Date.now(),
    };
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo,
      ),
    );
  };
  const updateTodo = (id: string, text: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              text,
            }
          : todo,
      ),
    );
    setEditingTodoId(null);
  };
  const startEditing = (id: string) => {
    setEditingTodoId(id);
  };
  const cancelEditing = () => {
    setEditingTodoId(null);
  };
  // Filter todos based on the current filter and search term
  const filteredTodos = todos
    .filter((todo) => {
      if (filter === "active") return !todo.completed;
      if (filter === "completed") return todo.completed;
      return true;
    })
    .filter((todo) =>
      todo.text.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  return (
    <div className="min-h-screen bg-[#fdfdf4] flex flex-col items-center py-8 px-4">
      <div className="w-full max-w-md">
        <Header />
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <TodoForm
            onAddTodo={addTodo}
            editingTodo={
              editingTodoId
                ? todos.find((t) => t.id === editingTodoId)
                : undefined
            }
            onUpdateTodo={updateTodo}
            onCancelEdit={cancelEditing}
          />
        </div>
        <div className="mb-4 flex flex-row items-center justify-start gap-2">
          <div className="w-2/3 max-w-[200px]">
            {" "}
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
          <TodoFilter currentFilter={filter} onFilterChange={setFilter} />
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <TodoList
            todos={filteredTodos}
            onDelete={deleteTodo}
            onToggle={toggleTodo}
            onEdit={startEditing}
            editingTodoId={editingTodoId}
          />
        </div>
      </div>
    </div>
  );
};
export default TodoApp;
