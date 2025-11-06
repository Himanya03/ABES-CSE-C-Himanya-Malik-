import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <div class="container-fluid">
   <a class="navbar-brand" href="#">
      <img src="https://www.shutterstock.com/image-vector/vector-cute-baby-panda-cartoon-600nw-2427356853.jpg" alt="Logo" style="width:40px;" class="rounded-pill"/>
    </a>
    </div>
    
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">About Us</a>
        </li>
      </ul>

    </div>

</nav>
    </div>
  )
}

export default Nav
