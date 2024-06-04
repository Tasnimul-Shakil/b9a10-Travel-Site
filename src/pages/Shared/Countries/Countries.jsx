import { Link } from "react-router-dom";

const Countries = ({ card }) => {
    const { country_name, countryPhoto } = card;
    return (
      <div>
      <article className="custom-card">
        <img
          className="custom-card__background"
          src={countryPhoto}
          alt="Photo of my work"
        />
        <div className="custom-card__content flow text-left">
          <div className="custom-card__content--container flow">
            <h2 className="custom-card__title text-2xl font-head font-bold text-[#55D4AB]">
              {country_name}
            </h2>
          </div>
          <Link to={`/countryCards/${country_name}`}>
          <button  className="btn text-xl border-none text-[#080808] bg-[#55D4AB] group">
            See All Location
          </button>
          </Link>
        </div>
      </article>
    </div>
    );
};

export default Countries;
