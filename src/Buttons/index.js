import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
  tasks.length > 0 && (
    <section className="buttons">
      <button className="buttons__button">
        {hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
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