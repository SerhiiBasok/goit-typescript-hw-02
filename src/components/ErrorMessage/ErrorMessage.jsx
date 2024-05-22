import PropTypes from "prop-types";

const ErrorMessage = ({ message }) => {
  const errorStyle = {
    margin: "auto",
  };

  return (
    <div style={errorStyle}>
      <p>{message}</p>
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
