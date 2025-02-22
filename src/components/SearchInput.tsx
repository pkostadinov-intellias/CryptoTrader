import { Search } from "lucide-react";

interface SearchInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({ onChange }: SearchInputProps) {
  return (
    <div className="input-group">
      <Search />
      <input type="text" placeholder="Search name..." onChange={onChange} />
    </div>
  );
}
