import { Spinner } from "react-bootstrap";
import s from "./LoadingScreen.module.css";

export default function LoadingScreen() {
  return (
    <div className={s.container}>
      <Spinner animation="grow" variant="primary"></Spinner>
    </div>
  );
}
