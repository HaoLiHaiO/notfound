import React from 'react';
import { Link } from 'react-router-dom';

const LoremIpsum = () => (
  <div>
    <p>Link to the not found page.</p>
    <p>Change the main URL to anything and you'll also land on 404.</p>
    <Link to="/not-found">
      Let's go
    </Link>
  </div>
);

export default LoremIpsum;