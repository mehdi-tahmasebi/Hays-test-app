import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const EvolutionList = ({ evolutions }) => {
  return (
    <div className="evolution-list">
      {evolutions.map((evolution) => (
        <div key={evolution.species.name} className="evolution-item">
          <Link to={`/evolution/${evolution.species.name}`}>
            <br />
            <button className="purple-button">Evolution </button>
          </Link>
        </div>
      ))}
    </div>
  );
};
EvolutionList.propTypes = {
  evolutions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default EvolutionList;
