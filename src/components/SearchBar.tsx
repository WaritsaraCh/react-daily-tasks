import React from 'react';
import { SearchIcon, XIcon } from 'lucide-react';
interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm
}) => {
  return <div className="flex items-center gap-2 bg-[#e6dfd8] rounded-lg p-2 flex-grow">
      <SearchIcon size={18} className="text-[#112e57]/70" />
      <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search tasks..." className="flex-grow bg-transparent border-none outline-none text-[#112e57] placeholder-[#112e57]/50" />
      {searchTerm && <button onClick={() => setSearchTerm('')} className="p-1 rounded-full hover:bg-[#cd5249]/20" aria-label="Clear search">
          <XIcon size={18} className="text-[#112e57]/70" />
        </button>}
    </div>;
};
export default SearchBar;