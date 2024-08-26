
import PropTypes from 'prop-types';

const PhoneticButton = ({ onClick, label }) => {
  return (
    <button
      className="px-4 py-2 bg-blue-600 text-white rounded shadow-md hover:bg-blue-700 transition duration-300"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

PhoneticButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default PhoneticButton;
