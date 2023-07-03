import styles from "./Footer.module.css";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className={styles.footer}>
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
};

type OrderProps = {
  closeHour: number;
  openHour: number;
};

const Order = ({ closeHour, openHour }: OrderProps) => {
  return (
    <div className={styles.order}>
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className={styles.btn}>Order</button>
    </div>
  );
};

export default Footer;
