import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function ProjectGallery() {
  const [cardArray, setCardArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [renderArray, setRenderArray] = useState({
    array: [],
    index: 0,
  });
  const styles = useSpring({
    reset: true,
    from: { opacity: 0, x: 80 },
    to: { opacity: 1, x: 0 },
  });

  useEffect(() => {
    UpdateCards(renderArray.index);
  }, []);

  function UpdateCards(startIndex) {
    let cardsToDisplay = [];

    for (let i = startIndex; i < startIndex + 4; i++) {
      if (i % cardArray.length < 0) {
        cardsToDisplay.push(
          cardArray[cardArray.length + (i % cardArray.length)]
        );
      } else {
        cardsToDisplay.push(cardArray[i % cardArray.length]);
      }
    }

    setRenderArray({
      array: cardsToDisplay.map((card, i) => {
        return <ProjectCard key={card} name={card} />;
      }),
      index: startIndex,
    });
  }

  return (
    <div class="px-10 flex flex-row justify-between items-center">
      <button onClick={() => UpdateCards(renderArray.index - 4)}>
        <FontAwesomeIcon class="h-14 w-6 mr-6" icon={faAngleLeft} />
      </button>
      <animated.div
        class="flex-grow flex flex-row justify-between"
        style={styles}
      >
        {renderArray.array}
      </animated.div>
      <button onClick={() => UpdateCards(renderArray.index + 4)}>
        <FontAwesomeIcon class="h-14 w-6 ml-6" icon={faAngleRight} />
      </button>
    </div>
  );
}

export default ProjectGallery;
