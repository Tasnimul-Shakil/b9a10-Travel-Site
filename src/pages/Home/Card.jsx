import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ card }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const {
    _id,
    tourist_spot_name,
    country_name,
    location,
    category,
    average_cost,
    seasonality,
    description,
    cardPhoto,
  } = card;
  Aos.init({ duration: 2000 });
  return (
    <div className="card " data-aos="flip-right">
      <div className="image">
        <img className="rounded-lg h-96" src={cardPhoto} alt="Someone famous" />
      </div>
      <div className="details rounded-l-lg">
        <div className="center">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="card-title">{tourist_spot_name}</h1>
              <h2>{country_name}</h2>
            </div>
            <h2 className=" text-xl font-semibold text-[#55D4AB]">
              {average_cost}
              <span className="text-[#55D4AB]">$</span>
            </h2>
          </div>
          <div className="flex justify-between gap-2 pt-4">
            <div className="flex transition duration-300 text-[#8C8F98] hover:bg-[#55D4AB] hover:text-[#333333] ease-in-out hover:scale-110 border-2 hover:border-0 rounded-md items-center gap-1 p-1 hover-zoom">
              <span className=" font-normal hover:font-bold text-xs">
                {location}
              </span>
            </div>
            <div className="flex transition duration-300 text-[#8C8F98] hover:bg-[#55D4AB] hover:text-[#333333] ease-in-out hover:scale-110 border-2 hover:border-0 rounded-md items-center gap-1 p-1 hover-zoom">
              <span className="font-normal hover:font-bold  text-xs">
                {seasonality}
              </span>
            </div>
            <div className="flex transition duration-300 text-[#8C8F98] hover:bg-[#55D4AB] hover:text-[#333333] ease-in-out hover:scale-110 border-2 hover:border-0 rounded-md items-center gap-1 p-1 hover-zoom">
              <span className="font-normal hover:font-bold  text-xs">
                {category}
              </span>
            </div>
          </div>
          {description.length > 60 ? (
            <p>
              {description.slice(0, 60)}{" "}
              <Link to={`/ViewDetails/${_id}`}>
                ...
                <br />
                <button
                  onClick={scrollToTop}
                  className="btn my-4 px-2 border-0 font-semibold text-white bg-[#55D4AB] hover:bg-[#55D4AB] hover:text-black"
                >
                  view details
                </button>
              </Link>
            </p>
          ) : (
            <p>{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    tourist_spot_name: PropTypes.string.isRequired,
    cardPhoto: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    average_cost: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    country_name: PropTypes.number.isRequired,
    category: PropTypes.number.isRequired,
    seasonality: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
