import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useState, useEffect } from "react";
import  { Card } from "./components/Card/Card";
//import { Filter } from "./components/Filter";
//import { Navbar } from "./components/Navbar";
//import { Pagination } from "./components/Pagination";
//import { Search } from "./components/Search";


function App() {

  const [fetchedData, updateFetchData] = useState([]);
  const { info, results } = fetchedData;
  const api = `https://rickandmortyapi.com/api/character/?page=2`;

  useEffect(() => {
    (async () => {
      const data = await fetch(api)
      .then((res) => 
      res.json());
      updateFetchData(data);
    })();
  }, [api]);

  return (
    <>
    <div className="App" >
     <h1 className="text-center mb-3">Personajes</h1>
     <div className="container" >
      <div className="row" >
          Componente Filter puede colocarse aqui
      <div className="col-lg-8 col-12" >
        <div className="row" >
        <Card results={results} />
        </div>
      </div>
      </div>
     </div>
    </div>
    </>
  );
}

export default App;
