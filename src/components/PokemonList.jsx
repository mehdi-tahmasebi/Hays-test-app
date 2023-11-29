import PokemonCard from "./PokemonCard";
import PropTypes from "prop-types";

const PokemonList = ({ data }) => {
  return (
    <div className="card-list-pokemon container">
      {data.map((pokemon, i) => (
        <PokemonCard key={i} pokemon={pokemon} />
      ))}
    </div>
  );
};

PokemonList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default PokemonList;
