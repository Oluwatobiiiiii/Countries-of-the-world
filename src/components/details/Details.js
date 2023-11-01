import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../spinner/spinner";

export default function Details({ detail }) {
  const navigate = useNavigate();
  const [loading, setIsLoading] = useState(false);

  console.log(detail);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div>
            <button onClick={() => navigate(-1)}>back</button>
          </div>

          <div className="country-details">
            <div className="country-official-image">
              <img src={detail.flags.svg} alt={detail.flags.alt} />
            </div>

            <div className="country-details">
              <div>
                <div>
                  <p>Native Name:{detail.name.common}</p>
                  <p>Population:{detail.population}</p>
                  <p>Region:{detail.region}</p>
                  <p>Sub Region:{detail.subregion}</p>
                  <p>Capital:{detail.capital}</p>
                </div>

                <div>
                  <p>Top Level Domain:{detail.topLevelDomain}</p>
                  <p>Currencies:{detail.currencies}</p>
                  <p>Languages: </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
