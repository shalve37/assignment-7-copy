import PropTypes from "prop-types";
const RemainingCredits = ({ remainingCredits }) => {
  return (
    <div>
      <h3 className="text-[#2F80ED] text-xl font-bold text-left pt-4 pb-5 pl-6">
        Credit Remaining {remainingCredits} hr
      </h3>
    </div>
  );
};

RemainingCredits.propTypes = {
  remainingCredits: PropTypes.number,
};

export default RemainingCredits;
