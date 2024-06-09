export default function IdeasBlocks(props) {
  return (
    <div className="ideas-todo">
      <h2>Choose fresh ideas to do</h2>
      <div className="ideas-todo-blocks container">
        {props.ideas.slice(0, 4).map((el) => (
          <div
            className="ideas-todo-block block"
            key={el.id}
            onClick={() => props.onAddIdea(el)}
          >
            <p>{el.title}</p>
            <h4>{el.type}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
