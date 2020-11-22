<template>
	<div id="home-bg">
		<div class="container">
			<p>
				Bienvenue sur Ollie Mag ! Le seul site du monde sur la culture de la planche à roulette!
			</p>
		</div>
		<div class="container">
			<h2>Dernier article :</h2>
			<h3>{{ article.titre }}</h3>
			<img v-bind:src="article.img" />
			<p>{{ article.text }}</p>
		</div>
	</div>
</template>

<script>
module.exports = {
	data: function () {
		return {
			article: {
				titre: "OMG AVEZ-VOUS VU LA DERNIERE VIDEO AVEC JOSEPH GARBACCIO ????",
				img: "https://i.ytimg.com/vi/i1ONTQN10dE/maxresdefault.jpg",
				text:
					"Dans cette vidéo, un youtubeur crée une planche à roulette de toute pièce pour son idole Joseph Garbaccio, le résultat va vous étonner !",
			},
		};
	},
};
</script>

<style scoped>
#home-bg {
	width: 100%;
	height: auto;
	min-height: 100%;
	padding: 0px;
	margin: 0px;
	position: absolute;
	background-image: url("../assets/Home_bg.png");
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.container {
	margin-top: 80px;
	padding: 15px;
	color: #f3ff85;
	background-color: rgb(36, 36, 36);
	border: 3px solid #f3ff85;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

img {
	max-height: 20vh;
	max-width: 25vw;
}
</style>
