import { useParams } from "react-router-dom";
import { useGetSinglePokemonQuery } from "../services/pokemon";

const EvolutionDetails = () => {
  const { name } = useParams();
  const evolutionDetails = useGetSinglePokemonQuery(name);

  if (evolutionDetails.isLoading) {
    return "Loading...";
  }

  if (evolutionDetails.isError) {
    return "Error loading evolution details.";
  }

  const {
    sprites,
    name: pokemonName,
    evolutionTrigger,
    evolutionLevel,
    evolutionLocation,
  } = evolutionDetails.data;

  return (
    <div className="details-container">
      <h2>{pokemonName}</h2>
      <img
        className="pokemon-image"
        src={sprites?.other?.dream_world?.front_default}
        alt={pokemonName}
      />
      <div className="evolution-details">
        <p>
          <strong>Evolution Trigger:</strong> {evolutionTrigger}
        </p>
        <p>
          <strong>Evolution Level:</strong> {evolutionLevel}
        </p>
        <p>
          <strong>Evolution Location:</strong> {evolutionLocation}
        </p>
      </div>
    </div>
  );
};

export default EvolutionDetails;
