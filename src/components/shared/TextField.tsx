import { LucideIcon, Search } from "lucide-react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon;
}

export default function TextField({
  icon: Icon = Search,
  ...props
}: TextInputProps) {
  return (
    <div className={`input-group`}>
      {Icon && <Icon />}
      <input {...props} className="text-input" />
    </div>
  );
}
