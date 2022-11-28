import "./style.css";

const Tasks = (props) => (
    <ul className="section__ul">
        {props.tasks.map(task => (
            <li
            key={task.id}
                className={`list ${(props.hideDoneTasks && task.done) ? "list__hidden" : ""}`}
            >
                <button className="list__button list__button--done">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`list__item ${task.done ? "list__item--done" : ""}`}
                >
                    {task.content}
                </span>
                <button className="list__button list__button--remove">
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;