define("routing", ['backbone'], function(Backbone) {

    var routing = Backbone.Router.extend({
        routes: {
            "":             "home",
            "page1":        "page1"
        },

        home: function() {
            require(["modules/home"], function (home) {
                new home();
            });
        },

        page1: function() {
            require(["modules/page1"], function (page1) {
                new page1();
            });

        }
    });


    return routing;
});


