import PropTypes from "prop-types";
import CheckedItem from "../CheckedItem/CheckedItem";
import Credits from "../Credits/Credits";
import RemainingCredits from "../RemainingCredits/RemainingCredits";
const Checkout = ({ credits, checklist, remainingCredits }) => {
  return (
    <div className="bg-white md:w-full lg:w-1/4 h-fit rounded-lg">
      <div>
        <RemainingCredits
          remainingCredits={remainingCredits}
        ></RemainingCredits>
        <hr className="w-64 mx-auto pt-3" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-left pt-4 pb-5 pl-6">
          Course Name
        </h3>
        <div>
          {checklist.map((card, idx) => (
            <CheckedItem key={idx} id={idx} card={card}></CheckedItem>
          ))}
        </div>
        <hr className="w-64 mx-auto pt-3" />
      </div>
      <div>
        <Credits credits={credits}></Credits>
      </div>
    </div>
  );
};

Checkout.propTypes = {
  checklist: PropTypes.array,
  credits: PropTypes.number,
  remainingCredits: PropTypes.number,
};
export default Checkout;
