<template>
  <div class="nav-bar">
    <h1><NuxtLink to="/">Sistema <span>solar</span></NuxtLink></h1>
    <nav class="nav-planet">
        <NavBar />
    </nav>
    
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
.nav-bar {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
}
.nav-bar h1 {
  font-family: "lato";
  text-transform: uppercase;
  cursor: pointer;
}
.nav-bar span {
  font-size: 2.6vh;
  color: rgb(222, 245, 14);
  font-weight: 300;
}
</style>