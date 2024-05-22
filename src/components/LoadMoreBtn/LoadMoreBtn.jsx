import PropTypes from "prop-types";
import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div>
      <button className={css.loadMoreButton} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
