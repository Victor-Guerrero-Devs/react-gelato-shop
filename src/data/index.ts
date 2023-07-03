import {
  caramelGingerbread,
  cookieDough,
  mintGelato,
  orangeGelato,
  pistachio,
  vanillaCaramel,
} from "../assets";

const gelatoData = [
  {
    name: "Caramel Gingerbread Gelato",
    ingredients: "Caramel and gingerbread mixed with sugar",
    price: 7,
    photoName: caramelGingerbread,
    soldOut: false,
  },
  {
    name: "Cookie Dough Gelato",
    ingredients: "Cookie dough made fresh with natural ingredients",
    price: 10,
    photoName: cookieDough,
    soldOut: false,
  },
  {
    name: "Mint Gelato",
    ingredients: "Mint leaves straight from Vietnam",
    price: 12,
    photoName: mintGelato,
    soldOut: false,
  },
  {
    name: "Orange Gelato",
    ingredients: "Oranges straight from Florida",
    price: 12,
    photoName: orangeGelato,
    soldOut: false,
  },
  {
    name: "Pistachio Gelato",
    ingredients: "With the freshest cream and pistachios",
    price: 15,
    photoName: pistachio,
    soldOut: true,
  },
  {
    name: "Vanilla Caramel Gelato",
    ingredients: "Vanilla and caramel softly drizzled over",
    price: 18,
    photoName: vanillaCaramel,
    soldOut: false,
  },
];

export default gelatoData;
