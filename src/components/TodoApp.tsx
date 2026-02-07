import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";
import SearchBar from "./SearchBar";
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";

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
    Swal.fire({
      title: "Confirm Delete?",
      text: "This action cannot be undone.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#112e57",
      cancelButtonColor: "#cd5249",
      confirmButtonText: "Delete",
      background: "#fdfdf4",
    }).then((result) => {
      if (result.isConfirmed) {
        setTodos(todos.filter((todo) => todo.id !== id));
        toast.success("Task removed successfully");
      }
    });
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const updateTodo = (id: string, text: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
    setEditingTodoId(null);
  };

  const startEditing = (id: string) => setEditingTodoId(id);
  const cancelEditing = () => setEditingTodoId(null);

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
        <ToastContainer position="top-right" autoClose={1200} theme="light" />
        <Header />

        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <TodoForm
            onAddTodo={addTodo}
            editingTodo={todos.find((t) => t.id === editingTodoId)}
            onUpdateTodo={updateTodo}
            onCancelEdit={cancelEditing}
          />
        </div>

        <div className="mb-4 flex flex-row items-center justify-start gap-1">
          <div className="flex-1">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
          <TodoFilter currentFilter={filter} onFilterChange={setFilter} />
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 h-[350px] flex flex-col">
          <div className="flex-1 overflow-y-auto pr-2">
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
    </div>
  );
};

export default TodoApp;
