import React from 'react';
import { Todo } from './TodoApp';
import { CheckIcon, TrashIcon, PencilIcon } from 'lucide-react';
interface TodoItemProps {
  todo: Todo;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
  onEdit: (id: string) => void;
  isEditing: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onDelete,
  onToggle,
  onEdit,
  isEditing
}) => {
  return <div className={`
      flex items-center justify-between p-3 rounded-lg
      ${todo.completed ? 'bg-[#e6dfd8]/50' : 'bg-[#e6dfd8]'}
      transition-all duration-200
    `}>
      <div className="flex items-center gap-3 flex-grow">
        <button onClick={() => onToggle(todo.id)} className={`
            w-6 h-6 rounded-full border-2 flex items-center justify-center
            ${todo.completed ? 'bg-[#e1a956] border-[#e1a956]' : 'border-[#112e57]/30 hover:border-[#e1a956]'}
            transition-colors
          `} aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}>
          {todo.completed && <CheckIcon size={14} className="text-white" />}
        </button>
        <span className={`
            text-[#112e57] flex-grow
            ${todo.completed ? 'line-through text-[#112e57]/50' : ''}
          `}>
          {todo.text}
        </span>
      </div>
      <div className="flex gap-2">
        {!isEditing && <>
            <button onClick={() => onEdit(todo.id)} className="p-2 rounded-full hover:bg-[#e1a956]/20 transition-colors" aria-label="Edit task">
              <PencilIcon size={16} className="text-[#112e57]" />
            </button>
            <button onClick={() => onDelete(todo.id)} className="p-2 rounded-full hover:bg-[#cd5249]/20 transition-colors" aria-label="Delete task">
              <TrashIcon size={16} className="text-[#cd5249]" />
            </button>
          </>}
      </div>
    </div>;
};
export default TodoItem;