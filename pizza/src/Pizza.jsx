import React, { useEffect, useState } from "react";
import style from "./Pizza.module.css";

export default function Pizza() {
  const [pizza, setPizza] = useState([]);

  const getPizza = async () => {
    const recipe = await fetch(
      "https://forkify-api.herokuapp.com/api/search?q=pizza"
    ).then((result) => result.json());
    setPizza(recipe.recipes);
  };

  useEffect(() => {
    getPizza();
  }, []);
  console.log(pizza);

  return (
    <div className="container mb-5">
      <div className="row g-3">
        {pizza.map((pza) => (
          <div className="col-lg-3 col-md-6">
            <div className={`card ${style["card"]}`}>
              <img
                className="card-img-top"
                src={pza.image_url}
                alt={pza.title}
              />
              <div className={`card-body ${style["card-body-h"]}`}>
                <h5 className="card-title">{pza.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
