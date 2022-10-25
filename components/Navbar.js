import React from "react";
import Link from "next/link";
function Navbar(){
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="/about">About</a>
      <a class="nav-item nav-link" href="/articles">Articles</a>
      <a class="nav-item nav-link disabled" href="/contacts">Contacts</a>
    </div>
  </div>
</nav>
    );
}
export default Navbar;