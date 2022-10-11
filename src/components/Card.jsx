import "./Card.css";

function Card(props) {
  const data = new Date();
  const newYear = data.getFullYear();
  const year = props.date.toISOString();
  const oldYear = year.substr(0, 4);

  let momentYear = 0;

  if (newYear == oldYear) {
    momentYear = `${newYear} year`;
  
  } else if (newYear - oldYear == 1) {
    momentYear = "1 years ago";

  } else {
    momentYear = " 2 years ago";
  }

  return (
    <div className="container">
      <div>{props.title}</div>
      <div>{props.price}</div>
      <div>{props.color}</div>
      <div>{props.date.toISOString().substr(0, 10)}</div>
      <div><strong>{momentYear} </strong></div>
    </div>
  );
}

export default Card;
