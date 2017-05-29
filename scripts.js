// Backbone Model

var Blog = Backbone.Model.extend({
    defaults:{
        author: '',
        title: '',
        url: ''
    },

    initialize: function(){
        console.log("Blog is created!");
        }

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

// Backbone view for one blog

var BlogView = Backbone.View.extend({
    model: new Blog(),

    tagName: 'tr',

    initialze: function(){
        this.template = _.template($('.blogs-template').html());
    }

});

// Backbone View for all blogs

var BlogsView = Backbone.View.extend({

});
