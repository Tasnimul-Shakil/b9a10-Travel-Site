import Aos from "aos";
import "aos/dist/aos.css";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import PropTypes from "prop-types";

const TeamCard = ({ card }) => {
  const { name, image, designation, social_media } = card;
  Aos.init({ duration: 2000 });

  return (
    <div className="card border-2 border-[#E0DEF7]" data-aos="zoom-in">
      <figure className="h-96">
        <img className="rounded-t-lg" src={image} alt={name} />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">{name}</h2>
        <p>{designation}</p>
        <div className="card-actions justify-start">
          <div className="flex gap-6">
            {social_media.facebook && (
              <a
                href={social_media.facebook}
                target="_blank"
                className="btn p-4 flex items-center border-0 font-semibold text-white bg-[#7065F0] hover:bg-[#55D4AB] hover:text-black"
              >
                <FaFacebook className="text-xl" />
              </a>
            )}
            {social_media.twitter && (
              <a
                href={social_media.twitter}
                target="_blank"
                className="btn p-4 flex items-center border-0 font-semibold text-white bg-[#7065F0] hover:bg-[#55D4AB] hover:text-black"
              >
                <FaTwitter className="text-xl" />
              </a>
            )}
            {social_media.linkedin && (
              <a
                href={social_media.linkedin}
                target="_blank"
                className="btn p-4 flex items-center border-0 font-semibold text-white bg-[#7065F0] hover:bg-[#55D4AB] hover:text-black"
              >
                <FaLinkedin className="text-xl" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

TeamCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    social_media: PropTypes.shape({
      facebook: PropTypes.string,
      twitter: PropTypes.string,
      linkedin: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default TeamCard;
