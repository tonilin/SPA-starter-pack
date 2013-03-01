require.config({
	paths: {
		'jquery': 'vendor/jquery/jquery',
		'underscore': 'vendor/underscore-amd/underscore',
		'backbone': 'vendor/backbone-amd/backbone',
		'domReady': 'vendor/requirejs-domready/domReady'
	},
	shim: {
	}
});


require(["backbone", "routing", "jquery", "domReady!"], function (global, routing, $) {
    new routing();
    Backbone.history.start({pushState: true, root: "/require/"});
});



