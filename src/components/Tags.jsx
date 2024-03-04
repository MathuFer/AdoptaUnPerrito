import React from 'react';
import { Badge } from 'react-bootstrap';

const Tags = ({ text, color }) => {
  return (
    <div className="tags">
      <Badge bg={color}>{text}</Badge>
    </div>
  );
}

export default Tags;