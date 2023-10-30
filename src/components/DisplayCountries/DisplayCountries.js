import Country from "../allcountries/Country";
import "./DisplayCountries.css";

export default function DisplayCountries({ whatCountry, countries }) {
  return (
    // THE HOME PAGE
    <div className="countries">
      <div className="all-countries">
        {countries.map((country) => (
          <Country
            country={country}
            key={country.name.common}
            whatCountry={whatCountry}
          />
        ))}
      </div>
    </div>
  );
}
