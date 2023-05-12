import React, { useState, useEffect } from "react";
import axios from "axios";

//? Componenets
import Card from "../Card";

//? Styles
import "./index.scss";

const data = [
  {
    id: 1,
    img: "/img/Shirt Black 450.png",
    title: "Black Shirt",
    isNew: false,
    oldPrice: 0,
    price: 450,
  },

  {
    id: 2,
    img: "/img/Shirt Green 450.png",
    title: "Green Shirt",
    isNew: true,
    oldPrice: 450,
    price: 400,
  },

  {
    id: 3,
    img: "/img/Shirt Whiite 450.png",
    title: "White Shirt",
    isNew: false,
    oldPrice: 0,
    price: 450,
  },

  {
    id: 4,
    img: "/img/Sweatshirt Black 550.png",
    title: "Black Sweatshirt",
    isNew: false,
    oldPrice: 0,
    price: 550,
  },

  {
    id: 5,
    img: "/img/Sweatshirt White 550.png",
    title: "White Sweatshirt",
    isNew: false,
    oldPrice: 600,
    price: 550,
  },
];

const List = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          process.env.REACT_APP_API_URL + "products",
          {
            headers: {
              Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
            },
          }
        );

        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };

    console.log(fetchData);
  }, []);

  return (
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
