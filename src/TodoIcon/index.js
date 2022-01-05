import React from 'react';
import { ReactComponent as CheckSVG } from './check-circle-solid.svg';
import { ReactComponent as DeleteSVG } from './times-circle-solid.svg';
import './TodoIcon.css';

const iconTypes = {
  "check": color => (
    <CheckSVG className="Icon-svg Icon-svg--check" fill={color} />
  ),
  "delete": color => (
    <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color} />
  ),
};

function TodoIcon({ type, color = 'gray', onClick }) {
  console.log('type', type);
  console.log('iconTypes', iconTypes[type]);
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
