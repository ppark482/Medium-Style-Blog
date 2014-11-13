(function() {

  App.Routers.AppRouter = Parse.Router.extend({

    initialize: function() {
    }, // end of initialize

    routes: {
      ''              : 'home',
      'create'        : 'createAccount',
      'login'         : 'login',
      'myaccount'     : 'myAccount',
      'addpost'       : 'addpost',
      'authorposts'   : 'authorposts',
      'singleposts'   : 'singleposts'
    }, // end of routes

    home              : function () {
       // Renders Home View
       new App.Views.Home();
       new App.Views.Footer();
       new App.Views.AuthorPosts();
       new App.Views.SinglePost();
    }, // end of home

    createAccount     : function () {
       // Instantiate Create Acct Form
       new App.Views.CreateAcct();
    }, // end of createAccount

    login             : function () {
       // Instantiate Login View
       new App.Views.Login();
    }, // end of login

    myAccount         : function () {
      // Instantiate My Account View
      console.log(App.user);
      new App.Views.MyAcct(App.user);
    },

    addpost           : function () {
      // Instantiate Add Post View
      new App.Views.AddPost();
    },

    authorposts        : function () {
      // Instantiates Create Author Post
      new App.Views.AuthorPosts();
    },

    singleposts        : function() {
      new App.Views.SinglePost();
    }



   }); // end of router
}()); // end of IIF
