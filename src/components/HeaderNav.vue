<template>
  <nav>
    <router-link to="/" class="logo">がくなび</router-link>
    <section>
      <router-link to="/">
        <span class="material-symbols-outlined"> home </span>
        <span>Home</span>
      </router-link>
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
    </section>
  </nav>
</template>

<script>
export default {
  name: "HeaderNav",
};
</script>

<style scoped>
nav {
  padding: 0.5rem;
  background-color: var(--main-color);
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
}

nav .logo {
  font-size: x-large;
  margin-right: auto;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: auto;
}

nav a.router-link-exact-active {
  color: white;
}
</style>
