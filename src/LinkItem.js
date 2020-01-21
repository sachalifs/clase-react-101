import React from 'react';
import './LinkItem.css'

function LinkItem(props) {
  console.log(props);
  return (
    <li className='Link-item'>
      <a
        className="Link-item-link"
        href={props.link.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.link.text}
      </a>
    </li>
  );
};

export default LinkItem;