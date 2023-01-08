<template>
  <section class="layout">
    <HeaderNav />

    <!-- コンテンツ -->
    <section class="flex">
      <!-- メイン -->
      <main>
        <input type="search" class="search" v-model="search" placeholder="検索" />

        <ul class="card-layout">
          <li v-for="item in course" :key="item.id" class="card">
            <router-link :to="{ name: 'ContentIndex', params: { course: item.id } }">
              <img :src="'./thumbnail/' + item.id + '.png'" alt="thumbnail" />
              <div>{{ item.name }}</div>
              <section>
                <span class="tag" v-for="(tag, index) in item.tag" :key="index">
                  {{ tag }}
                </span>
              </section>

              <div class="date">{{ item.date }}</div>
            </router-link>
          </li>
        </ul>
      </main>

      <!-- サブ -->
      <aside>
        <button class="material-symbols-outlined btn-right" @click="showGame = !showGame">
          menu
        </button>
        <ul v-show="showGame">
          <li v-for="item in game" :key="item.id">
            <router-link to="/game/typing">{{ item.name }}</router-link>
          </li>
        </ul>
      </aside>
    </section>

    <!-- フッター -->
    <footer>
      <div class="flex-a">
        <div></div>
        <router-link to="#">お借りした素材</router-link>
      </div>
      <small>&copy;2022 WitShip</small>
    </footer>
  </section>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";

export default {
  name: "IndexView",
  components: {
    HeaderNav,
  },
  data() {
    return {
      course: [],
      search: "",
      game: [],
      showGame: true,
    };
  },
  async mounted() {
    // コースを取得
    const courseData = await fetch("./course.json");
    const coursejson = await courseData.json();
    this.course = coursejson;
    // ゲームを取得
    const gameData = await fetch("./game.json");
    const gamejson = await gameData.json();
    this.game = gamejson;
  },
};
</script>

<style scoped>
.layout {
  height: -webkit-fill-available;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: auto 1fr auto;
  position: relative;
}

main {
  padding: 2rem;
  flex: 1;
}

.card-layout {
  padding: 0;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

.card {
  list-style: none;
  background-color: white;
  border: solid var(--main-color) 1px;
  border-radius: 0.5rem;
}

.card div {
  padding: 0.2rem;
}

.card a {
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  color: var(--text-color);
  text-decoration: none;
}

.card:hover {
  box-shadow: 2px 2px 5px;
}

.card img {
  border-radius: 0.5rem 0.5rem 0 0;
}

.card .tag {
  margin-left: 0.3rem;
  padding: 0.2rem;
  font-size: small;
  background-color: rgba(var(--main-color-rgb), 0.5);
  color: white;
  border-radius: 5px;
}

.card .date {
  margin-top: auto;
  text-align: end;
  font-size: small;
}

aside {
  padding: 1rem;
}

aside ul {
  padding: 0;
}

aside ul li {
  display: block;
  margin-bottom: 0.3rem;
  padding: 0;
  list-style: none;
  background-color: white;
  border-bottom: solid var(--main-color) 1px;
}

aside a {
  padding: 0.2rem;
}

aside a:hover {
  background-color: rgba(var(--main-color-rgb), 0.3);
}

footer {
  margin-top: auto;
  padding: 0.5rem;
  text-align: center;
  background-color: rgba(var(--main-color-rgb), 0.5);
}
</style>
