const HelloOtherWorld = window.httpVueLoader("./components/HelloOtherWorld.vue");

var app = new Vue({
	el: "#app",
	data: {},
	components: { HelloOtherWorld },
});
