import React from 'react';
import avatar from './avatar.jpg';
import './App.css';
import LinksList from './LinksList';

const App = () => {
  const links = [
    { href: 'https://github.com/sachalifs', text: 'Github' },
    { href: 'https://twitter.com/sachalifs', text: 'Twitter' },
    { href: 'https://instagram.com/sachalifs', text: 'Instagram' },
    { href: 'https://lacocinadelcodigo.com', text: '👨🏻‍🍳' }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={avatar} className="App-logo" alt="logo" />
        <h1>
          Sacha Lifszyc
        </h1>
        <LinksList links={links} />
      </header>
    </div>
  )
}

export default App;
