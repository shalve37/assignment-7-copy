import PropTypes from "prop-types";
const Credits = ({ credits }) => {
  return (
    <div>
      <h4 className="text-[#1c1b1bcc] font-medium text-left pl-6 pt-4 pb-8">
        Total Credit Hour: {credits}
      </h4>
    </div>
  );
};

Credits.propTypes = {
  credits: PropTypes.number,
};

export default Credits;
