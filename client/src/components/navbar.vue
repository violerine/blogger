<template>
<div class="navbar">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">BLOGGER</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to="/"><a class="nav-link" href="#">Home</a></router-link>
      </li>
       <li class="nav-item">
        <router-link to="/about"><a class="nav-link" href="#">About</a></router-link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Cuma Hiasan" aria-label="Cuma hiasan">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Ga bisa Search</button>
    </form>
  </div>
</nav>
</div>

</template>

<script>

export default {
    name : 'navbar'
}

</script>