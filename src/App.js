import Navbar from "./components/navbar/Navbar";
import "./index.css";
import Details from "./components/details/Details";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DisplayCountries from "./components/DisplayCountries/DisplayCountries";
import Filter from "./components/filter/filter";
import Spinner from "./components/spinner/spinner";
import { useState, useEffect } from "react";

export default function App() {
  const [selected, setselected] = useState("Filter by Region ");
  const [loading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [detail, setDetail] = useState("");

  function whatCountry(el) {
    console.log(el);
    setDetail(el);
    console.log(detail);
    // setDetail("");
  }

  useEffect(function () {
    const controller = new AbortController();
    async function countries() {
      setIsLoading(true);
      const data = await fetch("https://restcountries.com/v3.1/all", {
        signal: controller.abort(),
      });

      const result = await data.json();
      // console.log(result);
      setCountries(result);
      setIsLoading(false);
      // setCountries((result) => [result, ...countries]);
    }
    countries();

    return function () {
      controller.abort();
    };
  }, []);
  // console.log(countries);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Filter selected={selected} setselected={setselected} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              loading ? (
                <Spinner />
              ) : (
                <DisplayCountries
                  countries={countries}
                  whatCountry={whatCountry}
                />
              )
            }
          />

          <Route path="/Details" element={<Details detail={detail} />} />
        </Routes>
      </div>
    </Router>
  );
}
