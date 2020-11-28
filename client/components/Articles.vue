<template>
	<div id="page">
		<div id="body">
			<div class="add-article">Ecrire Un Article</div>
			<ul>
				<li class="article" v-for="article in articles" v-bind:key="article.id">
					<div>{{ article.title }} by {{ article.author }}</div>
					<img :src="article.img" />
					<div>{{ article.content }}</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
module.exports = {
	data: function () {
		return { articles: [] };
	},
	props: {},
	methods: {},
	mounted() {
		axios.get("api/articles").then((response) => (this.articles = response.data));
	},
};
</script>

<style>
#page {
	width: 100%;
	height: auto;
	min-height: 100%;
	padding: 0px;
	margin: 0px;
	position: absolute;
	background-image: url("../assets/Home_bg.png");
	background-repeat: no-repeat;
	background-size: cover;
	font-size: 25px;
}
#body {
	height: 90vh;
	margin-top: 80px;
	color: #f3ff85;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.add-article {
	background-color: rgb(36, 36, 36);
	border: 3px solid #f3ff85;
	border-radius: 15px;
	padding: 10px;
}
ul {
	list-style: none;
	width: 90%;
}
.article {
	width: 90%;
	padding: 10px;
	background-color: rgb(36, 36, 36);
	border: 3px solid #f3ff85;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
img {
	max-width: 70vw;
}
</style>
