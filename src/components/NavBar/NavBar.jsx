import React from 'react'
import img from './MYBOOK.png'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light p-0">
  <div class="container p-0">
    <a class="navbar-brand" href="#">
        <img src= {img} alt="logo" />
    </a>
    <CartWidget />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
      <ul class="navbar-nav d-flex justify-content-evenly">
        <li class="nav-item">
          <a class="nav-link" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Productos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Acerca de</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar

