({
	baseUrl: "./js",
	dir: "./js-built",
	mainConfigFile: "./js/main.js",
	modules: [
		{
			name: "main",

			excludeShallow:[
				"modules/home",
				"modules/page1"
			]
		},
		{
			name: "modules/home",
			exclude: [
				"jquery"
			]

		}
	]

})