<template>
	<div id="page">
		<div id="body" v-for="article in articles" v-bind:key="article.id"></div>
	</div>
</template>

<script>
module.exports = {
	data: function () {
		return {};
	},
	props: {
		articles: [],
	},
	methods: {},
	created: {
		getPost()
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
	justify-content: center;
	align-items: center;
}
</style>
