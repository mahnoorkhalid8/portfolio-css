import React from "react";

interface cardsType {
  title: string;
}

const Heading: React.FC<cardsType> = ({ title }) => {
  return (
    <div className="heading-sec">
      <p className="heading-p">
        {title}
      </p>
    </div>
  );
};

export default Heading;
