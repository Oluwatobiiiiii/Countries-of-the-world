// import countries from "../../data.json";
import Country from "../allcountries/Country";

export default function AllCountries({ whatCountry, countries }) {
  return (
    // THE HOME PAGE
    <div className="countries">
      <div className="all-countries">
        {countries.map((country) => (
          <Country country={country} whatCountry={whatCountry} />
        ))}
      </div>
    </div>
  );
}
