import Navbar from "./components/navbar/Navbar";
import "./index.css";
import Details from "./components/details/Details";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DisplayCountries from "./components/DisplayCountries/DisplayCountries";
import Filter from "./components/filter/filter";
import Spinner from "./components/spinner/spinner";
import { useState, useEffect } from "react";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [selected, setselected] = useState("");
  const [search, setSearch] = useState("");
  const [detail, setDetail] = useState([]);
  const [Error, setError] = useState("");

  function whatCountry(name) {
    setDetail(name);
    console.log(detail);
    console.log(countries);
  }

  // console.log(search);

  useEffect(function () {
    const controller = new AbortController();
    async function countries() {
      try {
        setIsLoading(true);
        const data = await fetch(`https://restcountries.com/v3.1/all`, {
          signal: controller.abort(),
        });

        const result = await data.json();
        setCountries(result);
      } catch (Error) {
        setError(Error.message);
      } finally {
        setIsLoading(false);
      }
    }
    countries();

    return function () {
      controller.abort();
    };
  }, []);

  let updatedCountries = [];

  updatedCountries = countries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase()) &&
      country.region.includes(selected)
  );
  console.log(selected);
  console.log(updatedCountries);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Filter
          selected={selected}
          setselected={setselected}
          search={search}
          setSearch={setSearch}
        />

        <Routes>
          <Route
            exact
            path="/"
            element={
              loading ? (
                <Spinner />
              ) : (
                <DisplayCountries
                  countries={updatedCountries}
                  whatCountry={whatCountry}
                />
              )
            }
          />

          <Route
            path="/Details"
            element={<Details detail={detail} whatCountry={whatCountry} />}
          />
        </Routes>
      </div>
    </Router>
  );
}
