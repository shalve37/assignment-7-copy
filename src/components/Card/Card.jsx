import PropTypes from "prop-types";
import { BsCurrencyDollar, BsBook } from "react-icons/bs";
const Card = ({ card, handleAddToChecklist }) => {
  const { cover, title, description, price, credits } = card;

  return (
    <div className="bg-white rounded-lg">
      <div className="p-4">
        <img className="w-72 h-36 rounded-lg" src={cover} alt="" />
        <h2 className="text-lg font-semibold text-left pt-4">{title}</h2>
        <p className="text-[#1c1b1b99] text-sm leading-6 text-left py-4">
          {description}
        </p>
        <div className="flex justify-evenly">
          <div className="flex items-center gap-1">
            <span>
              <BsCurrencyDollar></BsCurrencyDollar>
            </span>
            <p className="text-[#1c1b1b99] text-sm">Price: {price}</p>
          </div>
          <div className="flex items-center gap-1">
            <span>
              <BsBook></BsBook>
            </span>
            <p className="text-[#1c1b1b99] text-sm">Credit: {credits}hrs</p>
          </div>
        </div>
        <button
          onClick={() => handleAddToChecklist(card, parseFloat(credits))}
          className="text-white bg-[#2F80ED] w-full text-lg font-semibold rounded-lg  mt-4 py-2"
        >
          Select
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object,
  handleAddToChecklist: PropTypes.func,
};

export default Card;
