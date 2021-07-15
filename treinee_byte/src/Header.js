import React from 'react';
import './Header.css';
import img from './image-paisagem-720.png';

function Header() {
    return (
      <div className="Header">
        <div class="textBoxHeader">
          <h1>Header</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>  
        <figure class="imagemHeader">
          <img src={img} alt="Imagem Exemplo" width="auto" height="auto" />
        </figure>
      </div>
    );
  }
  
  export default Header;
  