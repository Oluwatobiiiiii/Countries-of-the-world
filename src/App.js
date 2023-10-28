import Navbar from "./components/navbar/Navbar";
import "./index.css";
import Details from "./components/details/Details";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllCountries from "./components/DisplayCountries/AllCountries";
import Filter from "./components/filter/filter";
import { useState, useEffect } from "react";

export default function App() {
  const [selected, setselected] = useState("Filter by Region ");

  const [countries, setCountries] = useState([]);
  function whatCountry(el) {
    console.log(el);
  }

  useEffect(function () {
    const controller = new AbortController();
    async function countries() {
      const data = await fetch("https://restcountries.com/v3.1/all", {
        signal: controller.abort(),
      });
      const result = await data.json();
      console.log(result);
      // setCountries(result);
      setCountries(result);
      // setCountries((result) => [result, ...countries]);
    }
    countries();

    return function () {
      controller.abort();
    };
  }, []);
  console.log(countries);

  return (
    <Router>
      <div className="App">
        <Navbar />

        <Filter selected={selected} setselected={setselected} />

        <Switch>
          <Route exact path="/">
            <AllCountries countries={countries} whatCountry={whatCountry} />
          </Route>
          <Route path="/Details">
            <Details />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
