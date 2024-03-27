import React from 'react';
import {Link} from 'react-router-dom'
import '../style/error.css'

export default function Error() {
  return (
    <div className="error-page">
      <h1>Error</h1>
      <p>page not found</p>
      <div className="return">
      <Link to="/">Go Back Home</Link>
      </div>
    </div>
  );
}
