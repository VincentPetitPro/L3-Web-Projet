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
						username: data.username,
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
		},
	},
});

function changeColor(inputId, fondId) {
	let color = document.getElementById(inputId).value;
	document.getElementById(fondId).style.fill = color;
}
