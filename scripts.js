// Backbone Model

var Blog = Backbone.Model.extend({
    defaults:{
        author: '',
        title: '',
        url: ''
    }
});

// Backbone Collection (Arrau of models)

var Blogs = Backbone.Collection.extend({});

// instantiate two blogs

var blog1 = new Blog({
    author: "Amit",
    title: "Amit's Blog",
    url: "http://amitsblog.com"
});


var blog2 = new Blog({
    author: "Ritu",
    title: "Ritu's Blog",
    ulr: "http://ritusblog.com"
});

// instantiate a collection

var blogs = new Blogs([blog1, blog2]);
