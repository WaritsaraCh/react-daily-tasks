import React from "react";
import { Todo } from "./TodoApp";
import SortableTodoItem from "./TodoItem";
import { 
  SortableContext, 
  verticalListSortingStrategy 
} from "@dnd-kit/sortable";

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
  onEdit: (id: string) => void;
  editingTodoId: string | null;
}

const TodoList: React.FC<TodoListProps> = ({ 
  todos, 
  onDelete, 
  onToggle, 
  onEdit 
}) => {
  if (todos.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-[#112e57]/40 italic">No tasks found. Start by adding one! 🖊️</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
  
      <SortableContext items={todos.map(t => t.id)} strategy={verticalListSortingStrategy}>
        {todos.map((todo) => (
          <SortableTodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onToggle={onToggle}
            onEdit={onEdit}
          />
        ))}
      </SortableContext>
    </div>
  );
};

export default TodoList;