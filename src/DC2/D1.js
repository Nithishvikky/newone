import React from "react";

const alertBox=()=>{
    alert('Message from Javascript Developer');
}
const console_ =()=>{
    console.log("Message to Developer");
}
const myarray=['a','e','i','o','u'];
const check=()=>{
    alert("Check console");
    myarray.push('u');
    console.log(myarray);
}
export default function D1() {
  return (
  
  <ul class="nav mt-5 ps-5">
    <li class="nav-item mt-5 ps-5">
    <button class="btn btn-outline-primary btn-lg" onClick={alertBox}>Click Me(Alert)</button>
    </li>
    <li class="nav-item mt-5 ps-5">
    <button class="btn btn-outline-danger btn-lg" onClick={console_}>Click Me(Console)</button>
    </li>
    <li class="nav-item mt-5 ps-5">
    <button class="btn btn-outline-info btn-lg" onClick={check}>Click Me(Array)</button>
    </li>
  </ul>
    
  )
}
