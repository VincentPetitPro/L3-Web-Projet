<template>
	<div id="page">
		<div id="body">
			<div id="container">
				<form id="register" method="post" @submit="register">
					<h3>Sign In</h3>
					<p>
						<label for="mail">mail</label>
						<input
							type="mail"
							id="mail"
							v-model="mail.input"
							name="mail"
							placeholder="john.appleseed@apple.com"
							class="form-input"
							required
						/>
					</p>
					<p>
						<label for="username">Nom d'utilisateur</label>
						<input
							type="text"
							id="username"
							v-model="username.input"
							name="username"
							placeholder="john92x"
							class="form-input"
							required
						/>
					</p>
					<p>
						<label for="password">Mot de passe</label>
						<input
							type="password"
							id="password"
							v-model="password.input"
							name="password"
							placeholder="••••••••••"
							class="form-input"
							minlength="8"
							required
						/>
					</p>
					<p><button type="submit">S'inscrire</button></p>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
module.exports = {
	data: function () {
		return {
			mail: { input: "" },
			username: { input: "" },
			password: { input: "" },
		};
	},
	methods: {
		async register() {
			await axios.post("api/register", {
				mail: this.mail,
				password: this.password,
			});
			this.$router.push("/");
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

#register {
	width: 35vw;
	height: 42vh;
	display: flex;
	flex-direction: column;
	text-align: center;
}
</style>
