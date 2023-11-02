import { useNavigate } from "react-router-dom";
import "./details.css";

export default function Details({ detail }) {
  const navigate = useNavigate();

  return (
    <div className="details">
      <div>
        <button className="back" onClick={() => navigate(-1)}>
          <i className="fa-solid fa-caret-left"></i> Back
        </button>

        <div className="country-details">
          <div className="country-official-image">
            <img
              src={detail.flags.svg}
              alt={detail.flags.alt}
              className="flag"
            />
          </div>

          <div className="country-details">
            <div className="part-1">
              <div className="text-1">
                <p>Native Name: {detail.name.common}</p>
                <p>Population: {detail.population}</p>
                <p>Region: {detail.region}</p>
                <p>Sub Region: {detail.subregion}</p>
                <p>Capital: {detail.capital}</p>
              </div>

              <div className="country-borders">
                {detail.borders?.map((border) => (
                  <button className="border-btn" key={border}>
                    {border}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p>Top Level Domain: {detail.tld}</p>
              <p>Currencies:</p>
              <p>Languages: </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
