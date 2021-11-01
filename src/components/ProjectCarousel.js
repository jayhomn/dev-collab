import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { useSpring, animated } from "react-spring";

function ProjectCarousel() {
  const [cardArray, setCardArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [renderArray, setRenderArray] = useState([]);
  const [styles, api] = useSpring(() => ({
    opacity: 0,
    x: 140,
  }));

  let index = 0;

  useEffect(() => {
    api.start({
      reset: true,
      from: { opacity: 0, x: 140 },
      to: { opacity: 1, x: 0 },
    });
  });

  useEffect(() => {
    UpdateCards();
    setInterval(() => UpdateCards(), 6000);
  }, []);

  function UpdateCards() {
    let cardsToDisplay = [];
    for (let i = 0; i < 4; i++) {
      if (index % cardArray.length === 0) {
        index = 0;
      }

      cardsToDisplay.push(cardArray[index]);
      index++;
    }

    setRenderArray(
      cardsToDisplay.map((card, i) => {
        return <ProjectCard key={card} name={card} />;
      })
    );
  }

  return (
    <animated.div
      class="px-28 py-10 flex flex-row justify-between"
      style={styles}
    >
      {renderArray}
    </animated.div>
  );
}

export default ProjectCarousel;
