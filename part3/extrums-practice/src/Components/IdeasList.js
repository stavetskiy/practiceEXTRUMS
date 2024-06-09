import { useState, useEffect } from "react";
import arrow from "../images/arrow_back_40dp.png";

export default function IdeasList(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex > Math.max(props.ideas.length - 3, 0)) {
      setCurrentIndex(Math.max(props.ideas.length - 3, 0));
    }
  }, [props.ideas, currentIndex]);

  const handlerPrevClick = () => {
    if (props.ideas.length > 3) {
      setCurrentIndex((prevIdex) => Math.max(prevIdex - 1, 0));
    }
  };

  const handlerNextClick = () => {
    if (props.ideas.length > 3) {
      setCurrentIndex((prevIdex) =>
        Math.min(prevIdex + 1, props.ideas.length - 3)
      );
    }
  };

  const visibleIdeas = props.ideas.slice(currentIndex, currentIndex + 3);

  if (visibleIdeas[0] === undefined) {
    return (
      <div className="ideas-list">
        <h2 className="empty-massage">
          You haven't added ideas to your list yet!
        </h2>
      </div>
    );
  }

  return (
    <div className="ideas-list">
      <h2>Ideas in my list</h2>
      <div className="ideas-list-blocks">
        <img
          className="arrowL arrow "
          src={arrow}
          alt="arrow"
          onClick={handlerPrevClick}
        />
        {visibleIdeas.map((el) => (
          <div
            className="block"
            key={el.id}
            onClick={() => props.onConfirmedIdea(el.id, el)}
          >
            <p>{el.title}</p>
            <h4>{el.type}</h4>
          </div>
        ))}
        <img
          className="arrowR arrow"
          src={arrow}
          alt="arrow"
          onClick={handlerNextClick}
        />
      </div>
    </div>
  );
}
