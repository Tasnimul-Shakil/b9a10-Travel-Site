import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Blogs = ({ card }) => {
  const {
    blog_id,
    title,
    time,
    categories,
    description,
    author_name,
    author_role,
    author_image,
    card_image,
  } = card;
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <article className="card border-3 border-[#155315] bg-base-100 shadow-xl border-2 rounded-xl">
      <figure>
        <img src={card_image} alt="Shoes" />
      </figure>
      <div className="flex px-4 pt-4 items-center gap-x-2 text-xs">
        <time dateTime={time} className="text-gray-500">
          {time}
        </time>
        <a
          href=""
          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
        >
          {categories}
        </a>
      </div>
      <div className="group px-4  relative">
        <h3 className="pt-3 text-lg font-semibold line-clamp-1 leading-6 text-gray-900 group-hover:text-gray-600">
          <Link to={`/blogDetails/${blog_id}`}>
            <h1 onClick={scrollToTop}>
              <span className="absolute inset-0 " />
              {title}
            </h1>
          </Link>
        </h3>
        <p className="pt-3 line-clamp-3 text-sm leading-6 text-gray-600">
          {description}
        </p>
      </div>
      <div className="relative px-4 py-4 flex items-center gap-x-4">
        <img
          src={author_image}
          alt=""
          className="h-10 w-10 rounded-full bg-gray-50"
        />
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <Link to={`/blogDetails/${blog_id}`}>
              <span onClick={scrollToTop} className="absolute inset-0" />
              {author_name}
            </Link>
          </p>
          <p className="text-gray-600">{author_role}</p>
        </div>
      </div>
    </article>
  );
};

Blogs.propTypes = {
  card: PropTypes.shape({
    blog_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    categories: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author_name: PropTypes.string.isRequired,
    author_role: PropTypes.string.isRequired,
    author_image: PropTypes.string.isRequired,
    card_image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Blogs;
