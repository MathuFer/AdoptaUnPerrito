import React from 'react';
import Tags from './Tags';

const MyCard = ({ imageUrl, name, description, tagText, tagColor }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} />
      <div className="card-body">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="tags-container">
          <Tags color={tagColor} text={tagText}  />
        </div>
      </div>
    </div>
  );
}

export default MyCard;

