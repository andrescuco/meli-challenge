export default function SearchBox({ handleChange, handleSubmit }) {
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <input type="button" value="Submit" onClick={handleSubmit} />
    </div>
  );
}
