import React from 'react';
import LinkItem from './LinkItem';
import './LinkList.css'

function LinksList(props) {
  return (
    <ul className='Link-list'>
      {props.links.map(function (link) {
        return <LinkItem link={link} key={link.href} />
      })}
    </ul>
  )
}

export default LinksList;