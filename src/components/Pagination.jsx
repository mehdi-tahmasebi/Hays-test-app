import { Button } from "react-bootstrap";

import PropTypes from "prop-types";

function Pagination({ handleNext, handlePrevious, offset, count }) {
  return (
    <div className="pagination-container">
      <Button
        onClick={handlePrevious}
        disabled={offset <= 0}
        variant="outline-success"
      >
        Previous
      </Button>
      <span>Page {offset / 20 + 1} 📃</span>
      <Button
        onClick={handleNext}
        disabled={offset >= count?.count}
        variant="outline-success"
      >
        Next
      </Button>
    </div>
  );
}

Pagination.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handlePrevious: PropTypes.func.isRequired,
  offset: PropTypes.number.isRequired,
  count: PropTypes.object,
};

export default Pagination;
