export default function IdeasTable(props) {
  const table = props.ideas.map((el, index) => (
    <tr key={el.id}>
      <td className="numbering">{index + 1}</td>
      <td>{el.title}</td>
      <td>{el.type}</td>
      <td>{el.date}</td>
    </tr>
  ));

  const emptyTable = (
    <tr>
      <td className="numbering">#</td>
      <td>Empty title</td>
      <td>Empty type</td>
      <td>01.01.2024</td>
    </tr>
  );

  return (
    <div className="ideas-table">
      <h2>Completed ideas</h2>
      <div className="ideas-comleted-table">
        <table className="ideas-comleted-table-styled table table-sm">
          <thead>
            <tr className="propetries">
              <th className="numbering"></th>
              <th>Title</th>
              <th>Type</th>
              <th>When</th>
            </tr>
          </thead>
          <tbody>{table[0] === undefined ? emptyTable : table}</tbody>
        </table>
      </div>
    </div>
  );
}
