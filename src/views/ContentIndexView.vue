<template>
	<HeaderNav />
	<!-- メイン -->
	<main>
		<!-- サムネイル -->
		<img :src="'./thumbnail/' + path + '.png'" class="thumbnail" alt="thumbnail" />
		<section class="contentIndex">
			<div v-for="(part, index) in course" :key="index">
				<div class="part">{{ part.part }}</div>

				<!-- チャプター -->
				<ol>
					<li v-for="(chapter, index) in part.chapter" :key="index">
						<!-- {{ chapter }} -->
						<router-link :to="{ name: 'LectureView', params: { course: path, id: chapter.href } }"
							v-show="chapter.href != '#'">
							{{ chapter.title }}
						</router-link>
						<span v-show="chapter.href == '#'">
							<span class="making">制作中</span>
							{{ chapter.title }}
						</span>
					</li>
				</ol>
			</div>
		</section>
	</main>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";

export default {
	name: "ContentIndex",
	components: {
		HeaderNav,
	},
	data() {
		return {
			path: this.$route.params.course, // パスパラメータ
			course: [],
			contentIndex: [],

		};
	},
	async mounted() {
		// console.log(this.path)
		// コースを取得
		const courseData = await fetch("./" + this.path + "/index.json")
			.then(response => {
				if (!response.ok) {
					console.log(response);
					console.log("コースがありません");
					return [{ "title": "オリエンテーション", "href": "01" }, { "title": "中学数学のゴール", "href": "02" }];
				}
				// console.log(response);
				return response;
			});

		const coursejson = await courseData.json();
		this.course = coursejson;

	},
};
</script>

<style scoped>
main {
	margin: 2rem auto;
	padding: 0 2rem;
}

@media (min-width: 800px) {
	main {
		display: grid;
		grid-template-columns: 2fr 3fr;
		gap: 1rem;
	}
}

.thumbnail {
	max-width: 100%;
}

/* もくじ */
.contentIndex {
	max-height: calc(100vh - 120px);
	overflow: auto;
}

.contentIndex::-webkit-scrollbar {
	display: none;
}

.contentIndex .part {
	padding-left: 0.5rem;
	font-size: large;
	font-weight: bold;
	border-left: var(--main-color) solid 5px;
	border-bottom: solid var(--main-color) thin;
}

.contentIndex ol {
	margin: 0 0 1rem;
	list-style: decimal;
	font-size: larger;
}

.contentIndex ol li {
	margin: 0.2rem 0;
}

.contentIndex ol li a {
	display: block;
}

.contentIndex ol li a:hover {
	background-color: var(--main-color);
	color: white;
}

.making {
	background: lightgray;
	padding: 0 0.5rem;
	border-radius: 5px;
}
</style>
