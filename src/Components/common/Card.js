import React from "react";

import CardHeader from "./CardHeader";
import Button from "./Button";

import ListItems from "./ListItems";

const Card = ({ cardInfo }) => {
  const MonthOrYear = cardInfo.isYearly ? "Year" : "Mo";
  return (
    <div className="card mb-4 shadow-sm">
      <CardHeader title={cardInfo.title} />
      <div className="card-body">
        <h1 className="card-title pricing-card-title">
          ${cardInfo.price} <small className="text-muted">/{MonthOrYear}</small>
        </h1>
        <ListItems items={cardInfo.items} />
        <Button
          text={cardInfo.action.name}
          outline={cardInfo.action.isOutline}
        />
      </div>
    </div>
  );
};
export default Card;
