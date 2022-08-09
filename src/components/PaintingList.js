import Painting from "./Painting";
import PropTypes from "prop-types";

function PaintingList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Painting
            imageUrl={item.url}
            title={item.title}
            authorName={item.author.tag}
            profileUrl={item.author.url}
            price={item.price}
            quantity={item.quantity}
          />
        </li>
      ))}
    </ul>
  );
}

export default PaintingList;

PaintingList.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
