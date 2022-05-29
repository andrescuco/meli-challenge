import { ReactNode } from "react";
import s from "./Button.module.css";

type ButtonProps = {
  handleClick?: () => void;
  children: ReactNode;
};

export default function Button({ handleClick, children }: ButtonProps) {
  return (
    <button onClick={handleClick} className={s.button}>
      {children}
    </button>
  );
}
