import { useEffect, useState } from "react";
import PokemonList from "../components/PokemonList";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import {
  useGetAllPokemonsQuery,
  useGetRangeDataQuery,
} from "../services/pokemon";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HomePage = () => {
  const response = useGetAllPokemonsQuery();
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const nextPrevData = useGetRangeDataQuery(offset);

  useEffect(() => {
    response.isSuccess && setData(response.data?.results);
    setIsLoading(response.isLoading);
  }, [response]);

  useEffect(() => {
    nextPrevData.isSuccess && setData(nextPrevData.data?.results);
    setIsLoading(nextPrevData.isLoading);
  }, [nextPrevData, offset]);
  const handlePrevious = () => {
    setIsLoading(true);
    setOffset((prev) => offset >= 20 && prev - 20);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    setIsLoading(true);
    setOffset(
      (prev) => offset + 20 <= response.currentData?.count && prev + 20
    );
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <Pagination
              handleNext={handleNext}
              handlePrevious={handlePrevious}
              offset={offset}
              count={response?.data}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            {isLoading ? "Api is Loading..." : <PokemonList data={data} />}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
