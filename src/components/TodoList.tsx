import React from 'react';
import { Todo } from './TodoApp';
import TodoItem from './TodoItem';
import { motion, AnimatePresence } from 'framer-motion';
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
  onEdit,
  editingTodoId
}) => {
  if (todos.length === 0) {
    return <div className="text-center py-6 text-[#112e57]/70">
        No tasks found. Add a new task to get started!
      </div>;
  }
  return <ul className="space-y-3">
      <AnimatePresence>
        {todos.map(todo => <motion.li key={todo.id} initial={{
        opacity: 0,
        y: 10
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        height: 0,
        marginBottom: 0
      }} transition={{
        duration: 0.2
      }}>
            <TodoItem todo={todo} onDelete={onDelete} onToggle={onToggle} onEdit={onEdit} isEditing={editingTodoId === todo.id} />
          </motion.li>)}
      </AnimatePresence>
    </ul>;
};
export default TodoList;