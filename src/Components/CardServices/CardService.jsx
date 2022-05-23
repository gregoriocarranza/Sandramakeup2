import { Fragment } from "react";
import PropTypes from "prop-types";
import path from "../../assets/Icons/Path.svg";
import "./index.css";

function CardService({ image, title, description, list1, list2, list3, num }) {
  const result = num % 2;
  return (
    <Fragment>
      <section className="services">
        <img
          src={image}
          className={
            result === 0
              ? "image-services order-left"
              : "image-services order-right"
          }
          alt={title}
        />
        <div className="content-services">
          <h2>{title}</h2>
          <p>{description}</p>
          <li>
            <img src={path} alt="icon path" /> {list1}
          </li>
          <li>
            <img src={path} alt="icon path" /> {list2}
          </li>
          <li>
            <img src={path} alt="icon path" /> {list3}
          </li>
        </div>
      </section>
    </Fragment>
  );
}
CardService.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  list1: PropTypes.string.isRequired,
  list2: PropTypes.string.isRequired,
  list3: PropTypes.string.isRequired,
};
export default CardService;
