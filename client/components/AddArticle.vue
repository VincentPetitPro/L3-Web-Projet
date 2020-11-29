<template>
	<div id="page">
		<div id="body">
			<div id="container">
				<form id="article">
					<h3>Ecrire un Article</h3>
					<p>
						<label for="title">Titre de l'article :</label>
						<input
							v-model="title"
							type="text"
							name="title"
							id="title"
							placeholder="Titre de mon incroyable article"
							required
						/>
					</p>
					<p>
						<label for="content">Contenu de l'article</label>
						<textarea
							v-model="content"
							name="content"
							id="content"
							cols="30"
							rows="10"
							required
						></textarea>
					</p>
					<p>
						<label for="img">URL de l'image</label>
						<input
							v-model="img"
							type="url"
							name="img"
							id="img"
							placeholder="https://www.imgur.com/monimage"
						/>
					</p>
					<p><button type="button" v-on:click="addArticle">Envoyer l'article</button></p>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
module.exports = {
	data: function () {
		return {
			title: "",
			content: "",
			img: "",
		};
	},
	methods: {
		addArticle: function () {
			this.$emit("addarticle", { title: this.title, content: this.content, img: this.img });
		},
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
#container {
	background-color: rgb(36, 36, 36);
	border: 3px solid #f3ff85;
	border-radius: 15px;
}
#article {
	width: 35vw;
	height: 60vh;
	display: flex;
	flex-direction: column;
	text-align: center;
}
</style>
