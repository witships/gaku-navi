<template>
  <router-view />
</template>

<style>
:root {
  --main-color: rgb(43, 134, 150);
  --main-color-rgb: 43, 134, 150;
  --sub-color: rgb(248, 229, 117);
  --sub-colo-rgb: 248, 229, 117;
  --back-color: rgb(255, 254, 247);
  --text-color: #2c3e50;
}

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  background-color: var(--back-color);
  color: #2c3e50;
  caret-color: transparent;
}

a {
  color: var(--text-color);
  text-decoration: none;
}

/* Googleマテリアルアイコン */
.material-symbols-outlined {
  font-variation-settings: "FILL" 1,
    /* 'wght' 400, 'GRAD' 0, */
    "opsz" 48;
}

/* レイアウトヘルパー */
.flex {
  display: flex;
}

.flex-a {
  display: flex;
  justify-content: space-around;
}

.flex-b {
  display: flex;
  justify-content: space-between;
}

.flex-c {
  display: flex;
  flex-direction: column;
}

/* コンポーネントヘルパー */
input {
  caret-color: var(--text-color);
}

.search {
  padding: 0.2rem;
  font-size: larger;
  border: 1px solid var(--main-color);
  border-radius: 5px;
}

.btn-right {
  display: block;
  margin-left: auto;
}
</style>
