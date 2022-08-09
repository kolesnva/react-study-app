import PropTypes from "prop-types";
import defaultImg from "../html_placeholder_01.jpg";

export default function Painting({
  imageUrl = defaultImg,
  title,
  authorName,
  profileUrl,
  price,
  quantity,
}) {
  // const { url, title, authorName, profileUrl, price } = props;
  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={profileUrl}>{authorName}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {quantity > 10 ? "есть в наличии" : "заканчивается"}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
