import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (
  tasks.length > 0 && (
    <section className="buttons">
      <button className="buttons__button" onClick={toggleHideDone}>
        {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
      </button>
      <button className="buttons__button"
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wyszystkie
      </button>
    </section>
  )
);

export default Buttons;