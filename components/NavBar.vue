<template>
  <nav class="nav-planet">
    <ul>
      <li><NuxtLink to="/sol">Sol</NuxtLink></li>
      <li><NuxtLink to="/mercurio">Mercúrio</NuxtLink></li>
      <li><NuxtLink to="/venus">Vênus</NuxtLink></li>
      <li><NuxtLink to="/terra">Terra</NuxtLink></li>
      <li><NuxtLink to="/marte">Marte</NuxtLink></li>
      <li><NuxtLink to="/jupiter">Júpiter</NuxtLink></li>
      <li><NuxtLink to="/saturno">Saturno</NuxtLink></li>
      <li><NuxtLink to="/urano">Urano</NuxtLink></li>
      <li><NuxtLink to="/netuno">Netuno</NuxtLink></li>
    </ul>
  </nav>
</template>

<style scoped>
.nav-planet ul {
  display: flex;
  margin: 1vh;
}
.nav-planet ul li {
  cursor: pointer;
  margin-left: 1.5rem;
  font-family: "lato";
  text-transform: uppercase;
}

.nav-planet ul li:hover {
  color: rgb(222, 245, 14);
}
</style>