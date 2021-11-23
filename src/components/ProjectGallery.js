import { useEffect, useState, useReducer } from "react";
import ProjectCard from "./ProjectCard";
import { useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

function ProjectGallery() {
  const { user } = useAuth0();
  const [cardArray, setCardArray] = useState([]);
  const [renderArray, setRenderArray] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { array: [], index: 0 }
  );
  const styles = useSpring({
    reset: true,
    from: { opacity: 0, x: 80 },
    to: { opacity: 1, x: 0 },
  });

  useEffect(() => {
    const userId = user.sub.split("|")[1];
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/project/by-user/${userId}`)
      .then((res) => {
        setCardArray(res.data);
      });
  }, []);

  useEffect(() => {
    if (cardArray.length > 0) {
      UpdateCards(renderArray.index);
    }
  }, [cardArray]);

  function UpdateCards(startIndex) {
    let cardsToDisplay = [];
    let cardsLessThanFour = false;

    for (let i = startIndex; i < startIndex + 4; i++) {
      if (!cardsLessThanFour) {
        if (i % cardArray.length < 0) {
          cardsToDisplay.push(
            cardArray[cardArray.length + (i % cardArray.length)]
          );
        } else {
          cardsToDisplay.push(cardArray[i % cardArray.length]);
        }

        cardsLessThanFour = cardsToDisplay.length === cardArray.length;
      }
    }

    if (cardsLessThanFour) {
      let toDisplay = [];
      for (let i = 0; i < 4; i++) {
        if (i < cardsToDisplay.length) {
          toDisplay.push(<ProjectCard key={i} {...cardsToDisplay[i]} />);
        } else {
          toDisplay.push(<div key={i} className="w-96 h-72" />);
        }
      }
      setRenderArray({
        array: toDisplay,
        index: startIndex,
      });
    } else {
      setRenderArray({
        array: cardsToDisplay.map((card, i) => {
          return <ProjectCard key={i} {...card} />;
        }),
        index: startIndex,
      });
    }
  }

  return (
    <div className="px-10 flex flex-row justify-between items-center">
      <button onClick={() => UpdateCards(renderArray.index - 4)}>
        <FontAwesomeIcon className="mr-6" size="3x" icon={faAngleLeft} />
      </button>
      {cardArray.length === 0 ? (
        <div className="text-3xl">You don't have any projects</div>
      ) : (
        <animated.div
          className="flex-grow flex flex-row justify-between"
          style={styles}
        >
          {renderArray.array}
        </animated.div>
      )}

      <button onClick={() => UpdateCards(renderArray.index + 4)}>
        <FontAwesomeIcon className="ml-6" size="3x" icon={faAngleRight} />
      </button>
    </div>
  );
}

export default ProjectGallery;
