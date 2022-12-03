import { useEffect, useState } from "react";
import { Card } from "../components/Card/Card";
import { InputGroup } from "../components/Filter/category/InputGroup";

const Episodes = () => {
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState([]);
  const { air_date, name } = info;
  const [id, setID] = useState(1);

  const api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async () => {
      const data = await fetch(api).then((res) => res.json());
      setInfo(data);

      const a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-3">
          Episodios nombre :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Air Date: {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4">Elije un Episodio</h4>
          <InputGroup name="Episodio" changeID={setID} total={51} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card page="/episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Episodes };
