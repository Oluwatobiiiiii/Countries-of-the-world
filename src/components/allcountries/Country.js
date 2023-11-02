import "./countries.css";
import { useNavigate } from "react-router-dom";

export default function Country({ country, whatCountry }) {
  const navigate = useNavigate();
  return (
    <div
      href="/"
      className="country"
      key={country.name.common}
      onClick={() => {
        navigate("/Details");
        whatCountry(country);
        console.log(country);
      }}
    >
      <div className="flag-image">
        <img
          className="flag"
          src={country.flags.png}
          alt={country.name.common}
        />
      </div>
      <div className="country-description">
        <h3>{country.name.common}</h3>
        <p>Population : {country.population}</p>
        <p>Region : {country.region}</p>
        <p>Capital : {country.capital}</p>
      </div>
    </div>
  );
}
