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
	async mounted() {
		const res = await axios.get("/api/articles");
		this.articles = res.data;
		try {
			const res3 = await axios.get("/api/me");
			this.user = res3.data;
			this.isConnected = true;
		} catch (err) {
			if (err.response?.status === 401) {
				this.isConnected = false;
			} else {
				console.log("error", err);
			}
		}
	},
	methods: {},
});

function changeColor(inputId, fondId) {
	let color = document.getElementById(inputId).value;
	document.getElementById(fondId).style.fill = color;
}
