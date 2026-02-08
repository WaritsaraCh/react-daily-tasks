import React from "react";
import { Todo } from "./TodoApp";
import { TrashIcon, PencilIcon, CheckCircle2, Circle, GripVertical } from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
  onEdit: (id: string) => void;
}

const SortableTodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onToggle, onEdit }) => {

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: todo.id });


  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : 'auto',
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-center gap-3 p-4 bg-[#e6dfd8]/50 rounded-xl transition-all group
        ${isDragging ? "shadow-2xl scale-105 bg-white ring-2 ring-[#e1a956] opacity-90" : "hover:bg-[#e6dfd8] shadow-sm"}
      `}
    >
  
      <div 
        {...attributes} 
        {...listeners} 
        className="cursor-grab active:cursor-grabbing text-[#112e57]/20 hover:text-[#112e57]/60 p-1"
      >
        <GripVertical size={20} />
      </div>

 
      <button
        onClick={() => onToggle(todo.id)}
        className="transition-transform active:scale-90"
      >
        {todo.completed ? (
          <CheckCircle2 className="text-[#e1a956]" size={24} />
        ) : (
          <Circle className="text-[#112e57]/30" size={24} />
        )}
      </button>

   
      <span className={`flex-grow font-medium transition-all ${
        todo.completed ? "line-through text-[#112e57]/30" : "text-[#112e57]"
      }`}>
        {todo.text}
      </span>

      
      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => onEdit(todo.id)}
          className="p-2 text-[#112e57]/50 hover:text-[#112e57] hover:bg-white/50 rounded-lg"
        >
          <PencilIcon size={18} />
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="p-2 text-[#cd5249]/50 hover:text-[#cd5249] hover:bg-red-50 rounded-lg"
        >
          <TrashIcon size={18} />
        </button>
      </div>
    </div>
  );
};

export default SortableTodoItem;