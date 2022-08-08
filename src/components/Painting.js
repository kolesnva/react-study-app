import defaultImg from '../html_placeholder_01.jpg';
console.log(defaultImg);

export default function Painting({ imageUrl = defaultImg, title, authorName, profileUrl, price }) {
  // const { url, title, authorName, profileUrl, price } = props;
  return   <div>
  <img src={imageUrl} alt={title} width="480" />
    <h2>{title}</h2>
    <p>Автор: <a href={profileUrl}>{authorName}</a></p>
  <p>Цена: {price} кредитов</p>
  <p>Доступность: заканчивается или есть в наличии</p>
  <button type="button">Добавить в корзину</button>
</div>

}