import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <div className="input-group">
      <Search />
      <input type="text" placeholder="Search..." />
    </div>
  );
}
