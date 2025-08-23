import React from 'react'
import './header.css';

export default function Header({children}) {
  return (
    <header>
      {children}
    </header>
  );
}