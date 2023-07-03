import styles from "./Menu.module.css";
import gelatoData from "../../data";
import Gelato from "../Gelato/Gelato";

const Menu = () => {
  const renderedGelatos = gelatoData.map((gelato) => (
    <Gelato key={gelato.name} {...gelato} />
  ));
  return (
    <main className={styles.menu}>
      <h2>Our Menu</h2>
      <ul className={styles.gelatos}>{renderedGelatos}</ul>
    </main>
  );
};

export default Menu;
