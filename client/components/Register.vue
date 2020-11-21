<template>
	<div id="page">
		<div id="body">
			<div id="container">
				<form id="register" action="/register" method="post" @submit="checkForm">
					<h3>Sign In</h3>
					<p>
						<label for="email">Email</label>
						<input
							type="email"
							v-model="email"
							name="email"
							placeholder="john.appleseed@apple.com"
							class="form-input"
						/>
					</p>
					<p>
						<label for="password">Mot de passe</label>
						<input
							type="password"
							v-model="password"
							name="password"
							placeholder="••••••••••"
							class="form-input"
							minlength="8"
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
			email: { input: "", invalid: false },
			password: { input: "" },
		};
	},
	methods: {
		register() {
			this.email.invalid = !this.email.input.match(
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
			);
			if (!this.email.invalid) {
				this.$emit("register", { email: this.email.input, password: this.password.input });
			}
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
	border: 3px solid blue;
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
