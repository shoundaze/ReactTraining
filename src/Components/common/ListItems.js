import React from "react";

const ListItems = ({ items }) => {
  const renderingItems = items.map(item => (
    <li key={item.toString()}>{item}</li>
  ));
  return <ul className="list-unstyled mt-3 mb-4">{renderingItems}</ul>;
};
export default ListItems;
