import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import {
  useGetMoreDetailsQuery,
  useGetEvolutionChainQuery,
} from "../services/pokemon";
import EvolutionList from "../components/EvolutionList";

const DetailsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const pokemonDetails = useGetMoreDetailsQuery(id);
  const evolutionChainData = useGetEvolutionChainQuery(pokemonDetails.data?.id);

  useEffect(() => {
    console.log("Evolution Chain Data:", evolutionChainData);
    if (pokemonDetails.isSuccess) {
      setIsLoading(pokemonDetails.isLoading);
    }
  }, [pokemonDetails, evolutionChainData]);

  const { sprites, name, species, types, abilities, moves, height, weight } =
    pokemonDetails?.data || {};
  const evolutions =
    evolutionChainData?.data?.chain?.evolves_to.map((evolution) => ({
      species: evolution.species,
    })) || [];

  return (
    <div className="details-container">
      {isLoading ? (
        "is loading ..."
      ) : (
        <div className="more-details">
          <img
            src={sprites?.other?.dream_world?.front_default}
            alt="pokemon_img"
            loading="lazy"
            className="pokemon-image"
          />
          <div className="details-box">
            <p className="name">
              <strong>Name:</strong> <span>{name}</span>
            </p>
            <p>
              <strong>Species:</strong> {species?.name}
            </p>
            <p>
              <strong>Types:</strong>{" "}
              {types?.map((singleType, i) => (
                <span key={i} className={"poke-types " + singleType.type?.name}>
                  {singleType.type?.name}
                </span>
              ))}
            </p>
            <p>
              <strong>Abilities:</strong>{" "}
              {abilities
                ?.map((singleAbility) => singleAbility.ability?.name)
                .join(", ")}
            </p>
            <p>
              <strong>Moves:</strong>{" "}
              {moves
                ?.map((singleMove) => singleMove.move?.name)
                .slice(0, 3)
                .join(", ") || "Unknown"}
            </p>
            <p>
              <strong>Height:</strong> {Number(height) / 10}m,{" "}
              <strong>Weight:</strong> {Number(weight) / 10}kg
            </p>
          </div>
          <EvolutionList evolutions={evolutions} />
        </div>
      )}
    </div>
  );
};

EvolutionList.propTypes = {
  evolutions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default DetailsPage;
