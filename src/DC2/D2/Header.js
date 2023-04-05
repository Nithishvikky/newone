import React from "react";

export default function Header() {
  return (
    <header>
    <nav class="navbar  navbar-expand-lg navbar-primary ">
      <a class="navbar-brand">
       <img src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg" width="100" height="100" alt="Logo"></img>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#footer">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" >Download</a>
          </li>
        </ul>
      </div>
    </nav>
    </header>
  )
}
