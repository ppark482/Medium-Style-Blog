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
      $('#upperRegion, #middleRegion, lowerRegion').html('');
      // Renders Nav Bar
      new App.Views.NavBar();
      // Render All Posts View
      new App.Views.AllPosts(this.options.collection);
      // Render Footer
      new App.Views.Footer(this.options.user);
      // Render Footer Authors and Tags
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
      user: '',
      author: '',
      status: ''
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

    events: {
      'click .author' : 'authorposts',
      'click .green'  : 'tagspostG',
      'click .yellow' : 'tagspostY',
      'click .orange' : 'tagspostO',
    },

    initialize        : function (options) {
      this.options = options;
    }, // end of initialize

    render            : function (options) {
      // Renders Foot Temp
      this.$el.append(this.template(this.options));
    }, // end of render


    authorposts        : function () {
      // Instantiates Create Acct Form
    App.router.navigate('authorposts', { trigger:true });
    },

    tagspostG        : function () {
      var green= "green";
      // Instantiates Tags Posts
      new App.Views.TagsPost(green);

    },

    tagspostY        : function () {
      var yellow= "yellow";
      // Instantiates Tags Posts
      new App.Views.TagsPost(yellow);

    },
    
    tagspostO       : function () {
      var orange= "orange";
      // Instantiates Tags Posts
      new App.Views.TagsPost(orange);

    }


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
      App.user_collection.on('sync', this, this);
      $('.authorsList').html(this.$el);
    },

    render: function() {
      var self = this;
      // console.log(options);
      // Need to open up models in collection
      var users = App.user_collection.models;
      // console.log(users);
      _.each(users, function(x) {
        // Need to bring in all users that have posted
        // And inject into rendered template
        // console.log(x);
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
      'click #publish' : 'publish',
      'click #asDraft'   : 'draft'
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
        user: App.user,
        author: App.user.attributes.username,
        status: 'published'
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

    }, // end of publish

    draft            : function (e) {
      e.preventDefault();
      // Create new post for current user as draft
      var p = new App.Models.Post ({
        title: $('#addTitle').val(),
        content: $('#addContent').val(),
        tag: $('#addTag').val(),
        user: App.user,
        author: App.user.attributes.username,
        status: 'draft'
      });
      var access = new Parse.ACL(App.user);
      // Set read access to anyone
      access.setPublicReadAccess(true);
      // Set access privilege to current user
      p.setACL(access);
      // Save post to collection
      p.save(null, {
        success: function() {
          App.posts.add(p);
          App.router.navigate('myaccount', { trigger:true });
        }
      }); // end of save
    } // end of draft

  }); // end of view

}()); // end of IIF

(function() {

  App.Views.AllPosts = Parse.View.extend({

    el: '#middleRegion',

    template: _.template($('#allPostsTemp').html()),

    events: {
          'click li' : 'singlepost'
    },

    initialize: function (options) {
      this.options.collection = options;
      App.posts.on('sync', this, this);
      // this.authorQuery();
      this.render(options);
    }, // end of initialize

    render: function (options) {
      var self = this;
      var posts = this.options.models;
      console.log(posts);
      // var published = posts.findWhere({ status : 'published' });
      // paul working here ++++++++++++++++++++++++++++++++++++++++++++++++++
      // console.log(published);
      // console.log(App.user_collection.models);
      _.each(posts, function(x) {
        self.$el.prepend(self.template(x.toJSON()));
      });

      new App.Views.EditPost(posts);

    }, /*end of render*/

    singlepost     : function () {
      // console.log(this);
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
      this.options.collection = options;
      App.posts.on('sync', this, this);
      // Need to render Navbar and footer for this view
      new App.Views.NavBar();
      new App.Views.Footer();
      new App.Views.FooterAuthors();
      this.render();
    }, // end of initialize

    render            : function(options) {
      var self = this;
      var posts = this.options.model;
      console.log(posts);
      // Need to render selected author's name
      // Pull id from clicked name from footer bar
      self.$el.html(self.template(posts.toJSON()));
      new App.Views.AuthorPostsList(options);
    } // end of render

  });

}());

(function(){

  App.Views.AuthorPostsList = Parse.View.extend({

    tagName: 'ul',
    className: 'aPostsList',

    template: _.template($('#authorPostsListsTemp').html()),

    events: {

    },

    initialize: function (options) {
      this.options = options;
      // Get our element on the page
      $('.authorPosts').html(this.$el);
      // Render query
      this.postQuery();
    },

    render: function () {

    },


    postQuery: function (options) {
      var self = this;
      // console.log(App.posts.models[0].attributes.user.id);
      // Query parse to find posts
      // for the passed user
      console.log(options);
      var query = new Parse.Query(App.Models.Post);
      query.equalTo('user', App.user);
      query.find({
        success: function(results) {
          _.each(results, function(x) {
            // console.log(x.toJSON());
            self.$el.append(self.template(x.toJSON()));
          });
        }
      }); // end of query find
    } // end of postQuery

  }); // end of view

}()); // end of IIF

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

  App.Views.EditPost = Parse.View.extend({

    el                  : '#middleRegion',

    template            : _.template($('#editTemp').html()),


    events: {
      'click #cancel'   : 'cancel',
      'click #update'   : 'update'
    },

    initialize          : function (options) {
      this.options = options;
      this.render(options);
    },

    render              : function (options) {
      // Renders Nav Bar
      var t = options;

      new App.Views.NavBar();
      new App.Views.Footer();
      this.$el.html(this.template);

      $('#addTitle').html('<input id="editTitle" type="text" value="' + t.title + '"/>');
      $('#editContent').append(t.content);
      if (t.tag === 'green') {
         $('#editTag').html('<option value="green" selected>Green</option><option value="yellow">Yellow</option><option value="orange">Orange</option>');
       }
       if (t.tag === 'green') {
         $('#editTag').html('<option value="green" selected>Green</option><option value="yellow">Yellow</option><option value="orange">Orange</option>');
       } else if (t.tag === 'yellow') {
         $('#editTag').html('<option value="green">Green</option><option value="yellow" selected>Yellow</option><option value="orange">Orange</option>');
         } else {
           $('#editTag').html('<option value="green">Green</option><option value="yellow">Yellow</option><option value="orange" selected>Orange</option>');
           } // end of conditional
    },

    update               : function () {

    },

    cancel               : function () {
      App.router.navigate('myaccount', { trigger:true });

    }



  }); // end of view


}());

(function () {




}());

(function () {

  /* Renders Home View */
  App.Views.NavBar = Parse.View.extend({

    el                : '#upperRegion',

    template          : _.template($('#navTemp').html()),

    events: {
      'click .home'   : 'home',
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
      this.logName();
      this.logstat();
    }, // end of render

    home              : function() {
      new App.Views.Home({collection: App.posts, user: App.user});
      App.router.navigate('', { trigger:true });
    },

    logName            : function() {
      if (App.user===null){
        console.log("none");
      } else {
      var a = App.user.getUsername();
      $('.guest').append(" "+ a + " ");
      }//end if/else statment
    },

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
    },

    logstat            : function() {
      if (App.user===null) {
        $('button').remove('.logout');
        $('span').remove('.guest');
        $('span').remove('.welcome');
        $('a').remove('.acctLink');
      } else {
        $('button').remove('.signUp');
        $('button').remove('.login');
      }
      //end of if statement
    }// end of logstat

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

    el                      : '#middleRegion',

    events: {
      'click #addPost'      : 'addPost'
    }, // end of events

    template                : _.template($('#myAccountTemp').html()),

    initialize              : function (options) {
      // Retrieves passed in parameter from router
      this.options = options;
      App.posts.on('sync', this, this);
      this.render();
    }, // end of initialize

    render                  : function () {
      // Renders Nav Bar
      new App.Views.NavBar();
      // Renders Footer
      new App.Views.Footer();
      // Render author page onto page
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

      'click .edit'   : 'edit',
      'click .delete' : 'delete'

    },

    initialize        : function (options) {
      this.options = options;
      this.render();
      var modelID = options.model.id;
    }, // end of initialize

    render            : function (options) {
      new App.Views.NavBar();
      new App.Views.Footer();
      new App.Views.FooterAuthors();
      this.$el.html(this.template(this.options.model.toJSON()));
    }, // end of render

    edit              : function() {
      // NEED TO PASS ID VALUE TO NEW EDIT VIEW
      // console.log(modelID);
      var editTitle = $('#titleForEdit').text();
      var editText = $('#contentForEdit').text();
      var editTag = $('#tagForEdit').text();
      new App.Views.EditPost({
        title: editTitle,
        content: editText,
        tag: editTag
      });
    }, //end of edit

    delete            : function () {

    },

    loop              : function() {


      }//end of loop

  }); //end of single post view



}());// end of IIF

(function () {

  App.Views.TagsPost = Parse.View.extend({

    el: '#middleRegion',

    events: {

    },

    template: _.template($('#tagViewTemp').html()),

    initialize                : function(options) {
      this.options = options;
      this.render(options);
    }, // end of initialize

    render                    : function(options) {
      console.log(options);
      this.$el.html(this.template);
      new App.Views.NavBar();
      new App.Views.Footer();
      new App.Views.FooterAuthors();

    }, // end of render

    greenpost                 : function() {

    },

    yellowpost                 : function() {

    },

    orangepost                 : function() {

    },



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
      'tagspost'        : 'tagspost',
      'green'           : 'green',
      'yellow'          : 'yellow',
      'orange'          : 'orange'
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
    authorposts         : function (ID) {
      var x = App.user_collection.get({ id : ID });
      // Instantiates Create Author Post
       new App.Views.AuthorPosts({ model : x });
    },

    tagspost            : function() {
      // Instantiates Create Tag Post View
      // new App.Views.TagsPost();
    },

    singlePost          : function(postId) {
      var x = App.posts.get({id: postId});
      new App.Views.SinglePost({model: x});
    },

    green               : function() {
      var green = 'green';
      new App.Views.TagsPost(green);
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


}()); // end of IIF
