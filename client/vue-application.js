const Home = window.httpVueLoader("./components/Home.vue");
const Custom = window.httpVueLoader("./components/Custom.vue");
const Register = window.httpVueLoader("./components/Register.vue");
const Login = window.httpVueLoader("./components/Login.vue");

const routes = [
	{ path: "/", component: Home },
	{ path: "/register", component: Register },
	{ path: "/custom", component: Custom },
	{ path: "/login", component: Login },
];

const router = new VueRouter({
	routes,
});

var app = new Vue({
	router,
	el: "#app",
	data: {
		user: {},
		isConnected: false,
	},
	components: { Home, Custom, Register, Login },
	methods: {
		async register(data) {
			try {
				await axios
					.post("api/register", {
						mail: data.mail,
						password: data.password,
					})
					.then((res) => {
						alert("Code " + res.status + " : Votre compte a été créé.");
					});
			} catch (error) {
				alert(
					"Code " +
						error.response.status +
						" : Votre compte n'a pas été créé, l'adresse mail étant déjà prise."
				);
			}
			router.push("/login");
		},
		async login(data) {
			await axios
				.post("api/login", {
					mail: data.mail,
					password: data.password,
				})
				.then((res) => {
					if (res.status == 200) {
						alert("Code " + res.status + " : Vous êtes bien connecté");
						this.isConnected = true;
						this.user = { username: res.username, mail: res.mail, id: res.id };
					} else if (res.status == 401) {
						alert("Code " + err.response.status + " : Erreur :" + res.message);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
});

function changeColor(inputId, fondId) {
	let color = document.getElementById(inputId).value;
	document.getElementById(fondId).style.fill = color;
}
