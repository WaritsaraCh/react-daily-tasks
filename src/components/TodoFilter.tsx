import React from 'react';
type FilterType = 'all' | 'active' | 'completed';
interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}
const TodoFilter: React.FC<TodoFilterProps> = ({
  currentFilter,
  onFilterChange
}) => {
  return <div className="flex rounded-lg overflow-hidden bg-[#e6dfd8]">
      {(['all', 'active', 'completed'] as FilterType[]).map(filter => <button key={filter} onClick={() => onFilterChange(filter)} className={`
            px-4 py-2 capitalize transition-colors
            ${currentFilter === filter ? 'bg-[#e1a956] text-white' : 'text-[#112e57] hover:bg-[#e1a956]/20'}
          `}>
          {filter}
        </button>)}
    </div>;
};
export default TodoFilter;