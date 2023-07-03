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
    <div>
      <img src={photoName} alt={name} />
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <p>${price}</p>
      {soldOut ? <p>Sorry, sold out</p> : <p>IN STOCK</p>}
    </div>
  );
};

export default Gelato;
