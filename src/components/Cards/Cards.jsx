import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import PropTypes from "prop-types";

const Cards = ({ handleAddToChecklist }) => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="md:w-2/3 lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5 mx-auto">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          handleAddToChecklist={handleAddToChecklist}
        ></Card>
      ))}
    </div>
  );
};

Cards.propTypes = {
  handleAddToChecklist: PropTypes.func,
};

export default Cards;
