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
      'authorposts'     : 'authorposts',
      'tagspost'        : 'tagspost'
    }, // end of routes

    home                : function () {
       // Renders Home View
       new App.Views.Home(App.posts);
       new App.Views.Footer();
       new App.Views.AuthorPosts();
       new App.Views.SinglePost();
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
      new App.Views.TagsPost();
    }

   }); // end of router
}()); // end of IIF
