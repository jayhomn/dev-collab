import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { useSpring, animated } from "react-spring";
import axios from "axios";

function ProjectCarousel() {
  const [cardArray, setCardArray] = useState([]);
  const [renderArray, setRenderArray] = useState([]);
  const [styles, api] = useSpring(() => ({
    opacity: 0,
    x: 140,
  }));

  let index = 0;

  useEffect(() => {
    (async function getProjectsToDisplay() {
      const response = await axios.get(
        `${process.env.PUBLIC_URL}/api/project?limit=12&after_id=1`
      );
      setCardArray(response.data);
    })();
  }, []);

  useEffect(() => {
    api.start({
      reset: true,
      from: { opacity: 0, x: 140 },
      to: { opacity: 1, x: 0 },
    });
  }, [renderArray]);

  useEffect(() => {
    if (cardArray.length !== 0) {
      UpdateCards();
      setInterval(() => UpdateCards(), 6000);
    }
  }, [cardArray]);

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
        return <ProjectCard key={i} {...card} />;
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
