import { useNavigate } from "react-router-dom";
import { useGetMoreDetailsQuery } from "../services/pokemon";

import PropTypes from "prop-types";

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();
  const moreInfo = useGetMoreDetailsQuery(pokemon.name);
  const handleCardClick = () => {
    navigate(`/${pokemon.name}`);
  };

  return (
    <div className="pokemon-card-container">
      <div className="card-img">
        <img
          src={moreInfo.data?.sprites?.other?.dream_world?.front_default}
          alt={`${pokemon.name}-img`}
          className="pokemon-image"
        />
      </div>
      <div className="card-info">
        <span className="pokemon-id">{`🆔 ${moreInfo.data?.id}`}</span>
        <button className="purple-button" onClick={handleCardClick}>
          {pokemon.name}
        </button>
      </div>
    </div>
  );
};
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  setDetailsId: PropTypes.any,
};

export default PokemonCard;
