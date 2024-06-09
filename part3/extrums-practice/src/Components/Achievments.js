export default function Achievments(props) {
  if (props.ideas[0] === undefined) {
    return (
      <div className="ideas-achivements">
        <h2 className="empty-massage">You haven't implemented any ideas yet</h2>
      </div>
    );
  }

  const circles = props.ideas.map((el) => (
    <div className="ideas-achivements-circle-block" key={el.id}>
      <div className="circle">
        <span>{el.count}</span>
      </div>
      <h4>{el.type}</h4>
    </div>
  ));

  return (
    <div className="ideas-achivements">
      <h2>Achievments</h2>
      <div className="ideas-achivements-circles">{circles}</div>
    </div>
  );
}
