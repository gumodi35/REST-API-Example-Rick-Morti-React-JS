import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useState, useEffect } from "react";
import  { Card } from "./components/Card/Card";
import { Filter } from "./components/Filter/Filter";
import { Navbar } from "./components/Navbar/Navbar";
import { Pagination } from "./components/Pagination/Pagination";
import { Search } from "./components/Search/Search";
import { Episodes } from "./Pages/Episodes";
import { Location } from "./Pages/Location";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./components/Search/Search.module.scss";


const Home = () =>{
  const [pageNumber, updatePageNumber] = useState(1);
  const [status, updateStatus] = useState("");
  const [gender, updateGender] = useState("");
  const [species, updateSpecies] = useState("");
  const [fetchedData, updateFetchData] = useState([]);
  const [search, setSearch] = useState("");
  const { info, results } = fetchedData;
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;


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
     <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
     <div className="container" >
      <div className="row" >
        <Filter 
          pageNumber={pageNumber}
          status={status}
          updateStatus={updateStatus}
          updateGender={updateGender}
          updateSpecies={updateSpecies}
          updatePageNumber={updatePageNumber}
        />
      <div className="col-lg-8 col-12" >
        <div className="row" >
        <Card results={results} />
        </div>
      </div>
      </div>
     </div>
     <Pagination 
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
     />
    </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </Router>
  )
}

export default App;
