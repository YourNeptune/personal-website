import React from "react";

const DesignCard = ({_}) => {
  return (
    <div className="DesignCard">
      <img src={_.img} alt={_.title} />
      <div className="DesignCard__button">See all</div>
    </div>
  );
};

export default DesignCard;
