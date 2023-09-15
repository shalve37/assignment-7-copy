import PropTypes from "prop-types";
const CheckedItem = ({ id, card }) => {
  const { title } = card;
  return (
    <div className=" pb-6 pl-6">
      <h2 className="text-[#1c1b1b99] text-left pb-1">
        {id + 1} {title}
      </h2>
    </div>
  );
};

CheckedItem.propTypes = {
  card: PropTypes.object,
  id: PropTypes.number,
};

export default CheckedItem;
