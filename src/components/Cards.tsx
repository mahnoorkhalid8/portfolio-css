import React from "react";
import Image from "next/image";

interface cardsType {
  title: string;
  description: string;
  img: string;
  tags: string[];
}

const Cards: React.FC<cardsType> = ({ title, description, img, tags }) => {
  return (
    <div
      className="card-container" data-aos="zoom-out">
      <div>
        <Image
          className="card-image"
          src={img}
          alt={title}
          width={500}
          height={400}
        />
      </div>

      <div className="card">
        <div className="card-t">
          {title}
        </div>
        <div>{description}</div>
        <div>
          {tags.map((el) => (
            <div className="card-tags" key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
