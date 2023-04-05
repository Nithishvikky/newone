import React from 'react';

const currentyear=new Date().getFullYear();

export default function Footer() {
  return (
 <div >
    <footer>
    <ul class="nav flex-column" id="footer">
    <li class="nav-item">
      <a class="nav-link active" href="https://www.facebook.com/" target="_blank">Facebook</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="https://www.instagram.com/" target="_blank">Instagram</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="https://www.google.com/" target="_blank">Google</a>
    </li>
    <li class="nav-item">
      <p>Copyright © {currentyear}</p>
    </li>
  </ul>
    </footer>
    </div>
  )
}
