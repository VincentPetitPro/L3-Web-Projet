<template>
	<div id="page">
		<div id="body">
			<router-link v-if="this.isConnected" to="/article" class="add-article"
				>Ecrire un Article</router-link
			>
			<ul>
				<li class="article" v-for="article in articles" v-bind:key="article.id">
					<h3>{{ article.title }}</h3>
					<h4>by {{ article.author }}</h4>
					<img :src="article.image" />
					<div>{{ article.content }}</div>
				</li>
			</ul>
			<div class="clear"></div>
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

<style scoped>
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
::-webkit-scrollbar {
	display: none;
}
.add-article {
	margin-top: 25px;
	background-color: rgb(36, 36, 36);
	border: 3px solid #f3ff85;
	border-radius: 15px;
	padding: 10px;
	color: #f3ff85;
	text-decoration: none;
}
.add-article:hover {
	border: 3px solid #e6fb00;
	color: #fcfdf1;
}

ul {
	margin-top: 25px;
	list-style: none;
	width: 90%;
	list-style-position: inside;
	overflow: auto;
}
li {
	margin-bottom: 25px;
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
:is(h3, h4) {
	margin: 5px;
}
</style>
