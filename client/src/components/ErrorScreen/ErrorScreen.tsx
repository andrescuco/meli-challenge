import s from "./ErrorScreen.module.css";

export default function ErrorScreen() {
  return (
    <div className={s.container}>
      <h1>
        (╯°□°）╯︵ ┻━┻ Ups! ha ocurrido un error, por favor intentalo de nuevo
        más tarde.
      </h1>
    </div>
  );
}
