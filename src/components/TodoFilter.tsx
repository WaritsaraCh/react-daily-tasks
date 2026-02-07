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
  const filters: FilterType[] = ['all', 'active', 'completed'];

  return (
    <div className="flex w-full rounded-xl bg-[#e6dfd8] p-1 gap-1 shadow-inner">
      {filters.map((filter) => {
        const isActive = currentFilter === filter;
        
        return (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`
              relative  py-1.5 text-sm font-bold capitalize transition-all duration-300 rounded-lg flex-1
              ${isActive 
                ? 'bg-[#e1a956] text-white shadow-sm scale-105 z-10' 
                : 'text-[#112e57]/60 hover:text-[#112e57] hover:bg-white/30'}
            `}
          >
            {filter}
            
            {isActive && (
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full opacity-50"></span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default TodoFilter;