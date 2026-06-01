import { Phone } from "lucide-react";

type ButtonProps = {
  text: string;
  icon?: boolean;
  className?: string;
};
export default function TupButton({ text, icon, className }: ButtonProps) {
  return (
    <button className={className}>
      {icon && <Phone size={18} />}
      {text}
    </button>
  );
}
