import React from "react";

//? Componenets
import Card from "../Card";

//? Functions
import useFetch from "../../hooks/useFetch";

//? Styles
import "./index.scss";

const List = ({ categoryId, maxPrice, sort, subCategory }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id][$eq]=${categoryId}${subCategory.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  return (
    <div className="list">
      {error ? (
        "Something went wrong"
      ) : loading ? (
        <img src="/img/oval.svg" alt="loding" />
      ) : (
        data?.map((item) => <Card item={item} key={item.id} />)
      )}
    </div>
  );
};

export default List;
