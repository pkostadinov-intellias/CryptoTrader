import { Link } from "react-router";

interface ReminderProps {
  condition: boolean;
  message: string;
  linkText?: string;
  linkPath?: string;
  textColor?: string;
}

const Reminder = ({
  condition,
  message,
  linkText,
  linkPath,
  textColor = "#22c55e"
}: ReminderProps) => {
  if (!condition) return null;

  return (
    <h2 style={{ margin: 20 }}>
      {message}{" "}
      {linkText && linkPath && (
        <Link
          style={{ textDecoration: "none", color: textColor }}
          to={linkPath}
        >
          {linkText}
        </Link>
      )}
    </h2>
  );
};

export default Reminder;
