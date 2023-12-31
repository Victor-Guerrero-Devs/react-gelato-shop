import styles from "./Gelato.module.css";

type GelatoProps = {
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
};

const Gelato = ({
  name,
  ingredients,
  price,
  photoName,
  soldOut,
}: GelatoProps) => {
  return (
    <li className={styles.gelato}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <p>${price}</p>
        {soldOut ? <p>Sorry, sold out</p> : <p>IN STOCK</p>}
      </div>
    </li>
  );
};

export default Gelato;
