export default function Task({ task, onClick }) {
    return (
      <article
        onClick={onClick}
        className="card"
        key={task.id}
        style={{ backgroundColor: task.completed ? 'green' : 'red' }}
      >
        <p>{task.name}</p>
      </article>
    );
  }
  