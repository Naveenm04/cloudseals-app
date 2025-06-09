import React from 'react';

const InfoCard = ({ title, value, color, subtext }) => {
  return (
    <div className={`rounded-md p-4 text-white ${color} min-w-[150px]`}>
      <h4 className="text-sm font-medium">{title}</h4>
      <p className="text-xl font-bold">{value}</p>
      {subtext && <span className="text-xs block">{subtext}</span>}
    </div>
  );
};

export default InfoCard;
