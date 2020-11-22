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
	data: {},
	components: { Home, Custom, Register, Login },
	methods: {
		async register(data) {
			await axios
				.post("/register", data)
				.then((response) => {
					router.replace({
						name: "home",
					});
				})
				.catch((error) => {
					console.log(error);
				});
		},
	},
});

function changeColor(inputId, fondId) {
	let color = document.getElementById(inputId).value;
	document.getElementById(fondId).style.fill = color;
}
