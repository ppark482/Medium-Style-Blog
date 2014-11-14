window.App = {};
        App.Models = {};
        App.Collections = {};
        App.Views = {};
        App.Routers = {};

(function(){

  App.Views.Home = Parse.View.extend({

    el: "#upperRegion",

    events: {
      'click .signUp' : 'signupForm',
      'click .login'  : 'login'
    },

    initialize        : function (options) {
      this.options = options;
      this.render(options);
    },

    render            : function (options) {
      // Renders Nav Bar
      new App.Views.NavBar();
      // Render All Posts View
      new App.Views.AllPosts(this.options.collection);
      // Render Footer
      new App.Views.Footer(this.options.user);
      // Render Footer Authros
      new App.Views.FooterAuthors();
    },

    signupForm        : function () {
      // Instantiates Create Acct Form
      new App.Views.CreateAcct();
    },

    login             : function () {
      // Instantiate Login Form
      new App.Views.Login();
    }

  }); // end of view

}()); // end of IIF

(function () {

  App.Models.Post = Parse.Object.extend({

    className: 'Post',

    idAttribute: 'objectId',

    defaults: {
      title: '',
      content: '',
      tag: '',
      user: ''
    },

    initialize: function () {

    }

  }); // end of model

}()); // end of IIF

(function() {



}()); // end of IIF

(function () {

  App.Views.Footer = Parse.View.extend({

    el                : '#lowerRegion',

    template          : _.template($('#footerTemp').html()),

    events: {
      'click .author' : 'authorposts',
      'click .tag'    : 'tagspost'
    },

    initialize        : function (options) {
      this.options = options;
      this.render(options);
    }, // end of initialize

    render            : function (options) {
      // Renders Foot Temp
      this.$el.append(this.template(this.options));
    }, // end of render


    authorposts        : function () {
      // Instantiates Create Acct Form
    App.router.navigate('authorposts', { trigger:true });
    },

    tagspost        : function () {
      // Instantiates Single Posts
    App.router.navigate('tagspost', { trigger: true });

    },

  });

}());

(function(){

  App.Views.FooterAuthors = Parse.View.extend({

    tagName: 'ul',
    className: 'listOfAuthors',

    template: _.template($('#footerAuthorTemp').html()),

    events: {

    },

    initialize: function() {
      this.render();
      $('.authorsList').append(this.$el);
    },

    render: function() {
      var self = this;
      // console.log(options);
      var users = App.user_collection.models;
      console.log(users);
      _.each(users, function(x) {
        // Need to bring in all users that have posted
        // And inject into rendered template
        console.log(x);
        self.$el.append(self.template(x.toJSON()));
      });
      console.log(this.el);
    }


  }); // end of view

}()); // end of IIF

(function () {

  App.Views.AddPost = Parse.View.extend({

    el: '#middleRegion',

    events: {
      'click #publish' : 'publish'
    },

    initialize      : function () {
      this.render();
    },

    render          : function () {
      // Renders Nav Bar
      new App.Views.NavBar();
      // Render Add Post Page
      var add = $('#addPostTemp').html();
      this.$el.html(add);
    },

    publish         : function (e) {
      e.preventDefault();
      // Creates a new post for the current user
      var p = new App.Models.Post ({
        title: $('#addTitle').val(),
        content: $('#addContent').val(),
        tag: $('#addTag').val(),
        user: App.user
      });
      var access = new Parse.ACL(App.user);
      // Set read access to anyone
      access.setPublicReadAccess(true);
      // Set access privilege to current user
      p.setACL(access);

      // Saves post to collection
      p.save(null, {
        success: function() {
          App.posts.add(p);
          App.router.navigate('myaccount', {trigger: true});
        }
      }); // end of save

    } // end of publish

  }); // end of view

}()); // end of IIF

(function() {

  App.Views.AllPosts = Parse.View.extend({

    el: '#middleRegion',

    template: _.template($('#allPostsTemp').html()),

    initialize: function (options) {
      this.options.collection = options;
      App.posts.on('sync', this, this);
      this.render(options);
    }, // end of initialize

    render: function (options) {
      var self = this;
      var posts = this.options.models;
      console.log(posts);
      // console.log(App.user_collection.models);
      _.each(posts, function(x) {
        // Looking for author
        var id = x.id;
        // var user = App.user_collection.findWhere({ id : id });
        // console.log(user);
        // Renders All Posts List
        console.log(x);
        self.$el.append(self.template(x.toJSON()));
      });
    }

  }); // end of view

}()); // end of IIF

(function () {

  App.Views.AuthorPosts = Parse.View.extend({

    el                : '#middleRegion',

    template          : _.template($('#authorPostTemp').html()),

    events: {

    },

    initialize        : function(options) {
      console.log(options);
      this.options.collection = options;
      App.posts.on('sync', this, this);
      // Need to render Navbar and footer for this view
      new App.Views.NavBar();
      new App.Views.Footer();
      this.render();
    }, // end of initialize

    render            : function(options) {
      var self = this;
      var posts = this.options.models;
      // Need to render selected author's name
      // Pull id from clicked name from footer bar
      self.$el.html(this.template);
  } // end of render
  });

}());

(function(){

  App.Views.AuthorPostsList = Parse.View.extend({

    el: ''

  })

}()); // IIF

(function() {

  App.Views.CreateAcct = Parse.View.extend({

    el: '#middleRegion',

    events: {
      'click button#makeAcct' : 'accountCreation'
    }, // end of events

    initialize                : function() {
      this.render();
    }, // end of initialize

    render                    : function() {
      new App.Views.NavBar();
      // Renders Create Acct Form
      var createAcct = $('#acctTemp').html();
      this.$el.html(createAcct);
    }, // end of render

    accountCreation           : function(e) {
      e.preventDefault();
      // New User Creation
      // Send New User to Server
      var user = new Parse.User({
        username: $('#createUsername').val(),
        password: $('#createPassword').val()
      });
      user.signUp(null, {
        success: function(user) {
          console.log('Account created');
          $('#middleRegion').empty();
          App.router.navigate('', { trigger: true });
        },
        error: function(user, error) {
          alert('Error');
          App.router.navigate('', { trigger: true });
        }
      }); // end of user.signup
    } // end of accountCreation

  }); // end of view

}()); // end of IIF

(function () {




}());

(function () {

  /* Renders Home View */
  App.Views.NavBar = Parse.View.extend({

    el                : '#upperRegion',

    template          : _.template($('#navTemp').html()),

    events: {
      'click .signUp' : 'signupForm',
      'click .login'  : 'loginForm',
      'click .logout' : 'logout'
    }, // end of events

    initialize        : function () {
      this.render();
    }, // end of initialize

    render            : function () {
      // Renders Nav Bar
      this.$el.html(this.template);
    }, // end of render

    signupForm        : function() {
      // On click to signup
      // Routes to 'create' page
      App.router.navigate('create', { trigger: true });
    }, // end of signupForm

    loginForm         : function() {
      // On click to login
      // Routes to 'login' page
      App.router.navigate('login', { trigger: true });
    }, // end of loginForm

    logout            : function() {
        Parse.User.logOut();
        App.user = null;
        App.router.navigate('', {trigger : true} );
        console.log('logged out');
      }

  }); // end of view

}()); // end of IIF

(function () {

  App.Views.Login = Parse.View.extend({

    el: '#middleRegion',

    events: {
      'click button#loginGo' : 'login'
    }, // end of events

    initialize               : function() {
      this.render();
    }, // end of initialize

    render                   : function () {
      // Renders Nav Bar
      new App.Views.NavBar();
      // Renders Login Form
      var login = $('#loginTemp').html();
      this.$el.html(login);
    }, // end of render

    login                    : function () {
      // Log User into account
      var username = $('#loginUsername').val();
      var password = $('#loginPassword').val();
      Parse.User.logIn(username, password, {
        success: function (user) {
          console.log('Login successful');
          // Route back to home page
          $('#middleRegion').empty();
          App.router.navigate('', {trigger: true});
        },
        error: function (user, error) {
          console.log('wrong');
        }
      }); // end of logIn
    } // end of login

  }); // end of view

}()); // end of IIF

(function () {

  App.Views.MyAcct = Parse.View.extend({

    el: '#middleRegion',

    events: {
      'click #addPost'      : 'addPost'
    }, // end of events

    template                : _.template($('#myAccountTemp').html()),

    initialize              : function (options) {
      // Retrieves passed in parameter from router
      this.options = options;
      App.posts.on('sync', this, this);
      this.render();
      console.log(options);
    }, // end of initialize

    render                  : function () {
      // Renders Nav Bar
      new App.Views.NavBar();
      // Render author page onto page
      console.log(this.options);
      this.$el.html(this.template(this.options.toJSON()));
    },

    addPost                 : function () {
      // Navigate to Add Post
      App.router.navigate('addpost', { trigger: true});
    }


  }); // end of view


}()); // end of IIF

(function () {

  App.Views.SinglePost=Parse.View.extend({

    el                : '#middleRegion',

    template          : _.template($('#singlePostTemp').html()),

    events: {

    },

    initialize        : function(options) {
      this.options=options
      this.render();
    }, // end of initialize

    render            : function(options) {

      this.$el.html(this.template(this.options));
    } // end of render



  });



}());

(function () {

  App.Views.TagsPost=Parse.View.extend({

    initialize                : function() {
      this.render();
    }, // end of initialize

    render                    : function() {

    } // end of render



  });



}());

(function () {

  App.Collections.Posts = Parse.Collection.extend({

    model: App.Models.Post

  });

}());

(function(){

  App.Collections.Users = Parse.Collection.extend({

    model: Parse.User

  });

}()); // end of IIF

(function() {

  App.Routers.AppRouter = Parse.Router.extend({

    initialize: function() {
    }, // end of initialize

    routes: {
      ''                : 'home',
      'create'          : 'createAccount',
      'login'           : 'login',
      'myaccount'       : 'myAccount',
      'addpost'         : 'addpost',
      'single/:postID'  : 'singlePost',
      'authorposts/:ID' : 'authorposts',
      'tagspost'        : 'tagspost'
    }, // end of routes

    home                : function () {
       // Renders Home View
       new App.Views.Home({collection: App.posts, user: App.user});
    }, // end of home

    createAccount       : function () {
       // Instantiate Create Acct Form
       new App.Views.CreateAcct();
    }, // end of createAccount

    login               : function () {
       // Instantiate Login View
       new App.Views.Login();
    }, // end of login

    myAccount           : function () {
      // Instantiate My Account View
      new App.Views.MyAcct(App.user);
    },

    addpost             : function () {
      // Instantiate Add Post View
      new App.Views.AddPost();
    },
    authorposts         : function () {
      // Instantiates Create Author Post
       new App.Views.AuthorPosts();
    },

    tagspost            : function() {
      // Instantiates Create Tag Post View
      // new App.Views.TagsPost();
    }

   }); // end of router
}()); // end of IIF

Parse.initialize("b9ihleuYJm7Z20BGiIeVfE3XHmgNZoGP0P6tWs7A", "c3b6HWtmmYpCntKDKl85BZAt1VLUvHqeXTEVnkEk");

(function() {

  // Create object to store current user
  App.user = Parse.User.current();
  // Creates instance of collection
  App.posts = new App.Collections.Posts();
  // Create instance of user collection
  App.user_collection = new App.Collections.Users();
  App.user_collection.fetch().done( function() {
    App.posts.fetch().done( function () {
      // Instantiate the router
      App.router = new App.Routers.AppRouter();
      Parse.history.start();
    });
  });

  if (App.user == null) {
    $('.acctLink').append(App.User);
  };

}()); // end of IIF
