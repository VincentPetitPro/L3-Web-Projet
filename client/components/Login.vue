<template>
	<div id="page">
		<div id="body">
			<div id="container">
				<form id="login">
					<h3>Sign In</h3>
					<p>
						<label for="mail">Mail</label>
						<input
							type="mail"
							id="mail"
							v-model="mail"
							name="mail"
							placeholder="john.appleseed@apple.com"
							class="form-input"
							required
						/>
					</p>
					<p>
						<label for="password">Mot de passe</label>
						<input
							type="password"
							id="password"
							v-model="password"
							name="password"
							placeholder="••••••••••"
							class="form-input"
							required
						/>
					</p>
					<p><button type="button" v-on:click="login">S'inscrire</button></p>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
module.exports = {
	data: function () {
		return {
			mail: "",
			password: "",
		};
	},
	methods: {
		login: function () {
			this.$emit("login", {
				mail: this.mail,
				password: this.password,
			});
		},
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
	justify-content: center;
	align-items: center;
}

#container {
	background-color: rgb(36, 36, 36);
	border: 3px solid #f3ff85;
	border-radius: 15px;
}

#login {
	width: 35vw;
	height: 42vh;
	display: flex;
	flex-direction: column;
	text-align: center;
}
</style>
