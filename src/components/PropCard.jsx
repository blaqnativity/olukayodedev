import React from "react";

const PropCard = ({ name, profile }) => {
  return (
    <div className={propCard}>
      <h2>{name}</h2>
      <p>{profile}</p>
    </div>
  );
};

export default PropCard;
