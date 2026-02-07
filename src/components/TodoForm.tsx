import React, { useEffect, useState, useRef } from "react";
import { Todo } from "./TodoApp";
import { PlusIcon, CheckIcon, XIcon, Sparkles } from "lucide-react"; 
import { toast } from "react-toastify";

interface TodoFormProps {
  onAddTodo: (text: string) => void;
  editingTodo?: Todo;
  onUpdateTodo: (id: string, text: string) => void;
  onCancelEdit: () => void;
}

const TodoForm: React.FC<TodoFormProps> = ({
  onAddTodo,
  editingTodo,
  onUpdateTodo,
  onCancelEdit,
}) => {
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editingTodo) {
      setText(editingTodo.text);
      inputRef.current?.focus();
    } else {
      setText("");
    }
  }, [editingTodo]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    if (editingTodo) {
      onUpdateTodo(editingTodo.id, text);
      toast.success("Task updated! ✨");
    } else {
      onAddTodo(text);
      toast.success("New task added! 🚀"); // เรียกใช้ toast จริงๆ
    }
    setText("");
  };

  // เพิ่ม Keyboard Shortcut: กด Esc เพื่อยกเลิกการแก้ไข
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape" && editingTodo) {
      onCancelEdit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 group">
      {/* ส่วนบอกสถานะเล็กๆ ด้านบน */}
      <div className="flex items-center gap-1 px-1">
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#112e57]/40">
          {editingTodo ? "Editing Mode" : "Quick Add"}
        </span>
      </div>

      <div 
        className={`flex items-center gap-2 bg-[#e6dfd8] rounded-xl p-2 transition-all duration-300 border-2 
          ${editingTodo ? 'border-[#e1a956] shadow-md' : 'border-transparent focus-within:border-[#e1a956]/30 focus-within:shadow-sm'}`}
      >
        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={editingTodo ? "Change your mind?..." : "What needs to be done?"}
          className="flex-grow bg-transparent border-none outline-none p-2 text-[#112e57] placeholder-[#112e57]/40 font-medium"
        />

        <div className="flex gap-1">
          {editingTodo ? (
            <>
              <button
                type="button"
                onClick={onCancelEdit}
                className="p-2 rounded-lg hover:bg-white/50 text-[#cd5249] transition-all active:scale-90"
                title="Cancel (Esc)"
              >
                <XIcon size={20} />
              </button>
              <button
                type="submit"
                className="p-2 rounded-lg bg-[#e1a956] text-white hover:bg-[#d09845] transition-all active:scale-95 shadow-sm"
              >
                <CheckIcon size={20} />
              </button>
            </>
          ) : (
            <button
              type="submit"
              disabled={!text.trim()}
              className={`p-2 rounded-lg transition-all duration-300 flex items-center gap-1
                ${text.trim() 
                  ? "bg-[#112e57] text-white shadow-md active:scale-95" 
                  : "bg-[#112e57]/10 text-[#112e57]/30 cursor-not-allowed"}`}
            >
              <PlusIcon size={20} />
              {text.trim() && <span className="pr-1 text-sm font-bold">Add</span>}
            </button>
          )}
        </div>
      </div>
      
      {!editingTodo && (
        <p className="text-[10px] text-center text-[#112e57]/30 italic">
          Press Enter to quickly save your task
        </p>
      )}
    </form>
  );
};

export default TodoForm;