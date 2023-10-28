export default function Country({ country, whatCountry }) {
  return (
    <div
      href="/"
      data-country-name={country.name.common}
      className="country"
      onClick={() => whatCountry(country)}
      key={country.latlng}
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
