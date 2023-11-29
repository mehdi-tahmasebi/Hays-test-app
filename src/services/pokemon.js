import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getAllPokemons: builder.query({
      query: () => ({
        url: `pokemon/`,
        method: "GET",
      }),
    }),
    getMoreDetails: builder.query({
      query: (id) => ({
        url: `pokemon/${id}`,
        method: "GET",
      }),
    }),
    getRangeData: builder.query({
      query: (offset) => ({
        url: `pokemon/?offset=${offset}&limit=20`,
        method: "GET",
      }),
    }),
    getSinglePokemon: builder.query({
      query: (name) => ({
        url: `pokemon/${name}`,
        method: "GET",
      }),
    }),
    getEvolutionChain: builder.query({
      query: (id) => ({
        url: `evolution-chain/${id}/`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllPokemonsQuery,
  useGetMoreDetailsQuery,
  useGetRangeDataQuery,
  useGetSinglePokemonQuery,
  useGetEvolutionChainQuery,
} = pokemonApi;
