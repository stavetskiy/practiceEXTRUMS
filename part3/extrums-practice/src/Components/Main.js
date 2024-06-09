import "../App.css";
import Achievments from "./Achievments";
import IdeasBlocks from "./IdeasBlocks";
import IdeasTable from "./IdeasTable";
import IdeasList from "./IdeasList";
import { ideas } from "./ideas";
import { useState } from "react";

export default function Main() {
  const [selectedIdeas, setSelectedIdeas] = useState([]);
  const [confirmedIdeas, setConfirmedIdeas] = useState([]);
  const [tableIdeas, setTableIdeas] = useState([]);

  const handleAddIdea = (idea) => {
    if (!selectedIdeas.some((el) => el.id === idea.id)) {
      setSelectedIdeas([...selectedIdeas, idea]);
    } else {
      alert("You already choose this idea");
    }
  };

  const incrementAchievment = (achievedIdea, type) => {
    return achievedIdea.map((el) =>
      el.type === type ? { ...el, count: el.count + 1 } : el
    );
  };

  const handleConfirmedIdea = (id, idea) => {
    setSelectedIdeas(selectedIdeas.filter((el) => el.id !== id));
    if (!confirmedIdeas.some((el) => el.type === idea.type)) {
      setConfirmedIdeas([...confirmedIdeas, { ...idea, count: 1 }]);
    } else {
      setConfirmedIdeas((achievedIdea) =>
        incrementAchievment(achievedIdea, idea.type)
      );
    }
    if (!tableIdeas.some((el) => el.id === idea.id)) {
      setTableIdeas([
        ...tableIdeas,
        { ...idea, date: new Date().toLocaleDateString() },
      ]);
    }
  };

  return (
    <main>
      <div>
        <IdeasBlocks ideas={ideas} onAddIdea={handleAddIdea}></IdeasBlocks>
        <hr />
        <IdeasList
          ideas={selectedIdeas}
          onConfirmedIdea={handleConfirmedIdea}
        ></IdeasList>
        <hr />
        <Achievments ideas={confirmedIdeas}></Achievments>
        <hr />
        <IdeasTable ideas={tableIdeas}></IdeasTable>
      </div>
    </main>
  );
}
