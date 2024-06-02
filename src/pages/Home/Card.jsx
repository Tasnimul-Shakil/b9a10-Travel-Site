import { Link } from "react-router-dom";
// import { IoBedOutline } from "react-icons/io5";
// import { PiBathtub } from "react-icons/pi";
// import { TbMeterSquare } from "react-icons/tb";
import Aos from "aos";
import "aos/dist/aos.css";
import PropTypes from 'prop-types';
import'./Card.css';



const Card = ({ card }) => {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
};
    const { _id, tourist_spot_name, country_name, location, category, average_cost, seasonality, description, cardPhoto } = card;
    Aos.init({ duration: 2000 });
    return (
      // <div className="card border-2 border-[#E0DEF7]" data-aos="flip-right">
      //   <figure className="relative overflow-hidden">
      //     <img className="rounded-t-lg transition duration-300 ease-in-out hover:scale-105" src={cardPhoto} alt={tourist_spot_name} />
      //   </figure>
      //   <div className="pt-2 text-left px-2 pb-4 space-y-2">
      //     <div className="flex items-start justify-between">
      //     <h2 className="card-title">
      //       {tourist_spot_name}
      //     </h2>
      //     <p className=" text-xs">{location}</p>
      //     </div>
      //     <h2 className="card-title text-[#7065F0]">{average_cost}<span className="text-[#8C8F98]">$/person</span></h2>
      //     {
      //       description.length > 60
      //           ? <p>{description.slice(0, 60)} <Link
      //               to={`/ViewDetails/${_id}`} 
      //               >...<br />
      //               <button onClick={scrollToTop} className="btn my-4 px-2 border-0 font-semibold text-white bg-[#7065F0] hover:bg-[#cce65b] hover:text-black">view details</button>
      //               </Link></p>
      //           : <p>{description}</p>
      //     }
      //     <div className="flex gap-2 justify-around border-t-2 pt-2">
      //       <div className="flex transition duration-300 text-[#8C8F98] hover:bg-[#cce65b] hover:text-[#333333] ease-in-out hover:scale-110 border-2 hover:border-0 rounded-md items-center gap-1 p-1 hover-zoom">
      //           <IoBedOutline className="text-[#7065F0] text-xl"/>
      //           <span className=" font-bold text-xs">{country_name}</span>
      //       </div> 
      //       <div className="flex transition duration-300 text-[#8C8F98] hover:bg-[#cce65b] hover:text-[#333333] ease-in-out hover:scale-110 border-2 hover:border-0 rounded-md items-center gap-1 p-1 hover-zoom">
      //           <PiBathtub className="text-[#7065F0] text-xl"/>
      //           <span className="font-bold text-xs">{category}</span>
      //       </div> 
      //       <div className="flex transition duration-300 text-[#8C8F98] hover:bg-[#cce65b] hover:text-[#333333] ease-in-out hover:scale-110 border-2 hover:border-0 rounded-md items-center gap-1 p-1 hover-zoom">
      //           <TbMeterSquare className="text-[#7065F0] text-xl"/>
      //           <span className="font-bold text-xs">{seasonality}</span>
      //       </div> 
            
      //     </div>
      //   </div>
      // </div>
      <div className="card " data-aos="flip-right">
      <div className="image">
        <img className="rounded-lg" src={cardPhoto} alt="Someone famous"/>
      </div>
      <div className="details rounded-l-lg">
        <div className="center">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="card-title">{tourist_spot_name}</h1>
              <h2>{country_name}</h2>
            </div>
            <h2 className=" text-xl font-semibold text-[#55D4AB]">{average_cost}<span className="text-[#55D4AB]">$</span></h2>
          </div>
          <div className="flex justify-between gap-2 pt-4">
          <div className="flex transition duration-300 text-[#8C8F98] hover:bg-[#cce65b] hover:text-[#333333] ease-in-out hover:scale-110 border-2 hover:border-0 rounded-md items-center gap-1 p-1 hover-zoom">
            <span className=" font-normal hover:font-bold text-xs">{location}</span>
          </div> 
          <div className="flex transition duration-300 text-[#8C8F98] hover:bg-[#cce65b] hover:text-[#333333] ease-in-out hover:scale-110 border-2 hover:border-0 rounded-md items-center gap-1 p-1 hover-zoom">
            <span className="font-normal hover:font-bold  text-xs">{seasonality}</span>
          </div> 
          <div className="flex transition duration-300 text-[#8C8F98] hover:bg-[#cce65b] hover:text-[#333333] ease-in-out hover:scale-110 border-2 hover:border-0 rounded-md items-center gap-1 p-1 hover-zoom">
            <span className="font-normal hover:font-bold  text-xs">{category}</span>
          </div> 
          </div>
          {
            description.length > 80
                ? <p>{description.slice(0, 80)} <Link
                    to={`/ViewDetails/${_id}`} 
                    >...<br />
                    <button onClick={scrollToTop} className="btn my-4 px-2 border-0 font-semibold text-white bg-[#55D4AB] hover:bg-[#cce65b] hover:text-black">view details</button>
                    </Link></p>
                : <p>{description}</p>
          }
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