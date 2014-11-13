(function() {

  App.Routers.AppRouter = Parse.Router.extend({

    initialize: function() {
    }, // end of initialize

    routes: {
<<<<<<< HEAD
      ''              : 'home',
      'create'        : 'createAccount',
      'login'         : 'login',
      'myaccount'     : 'myAccount',
      'addpost'       : 'addpost',
      'authorposts'   : 'authorposts',
      'tagspost'      : 'tagspost'
=======
      ''                : 'home',
      'create'          : 'createAccount',
      'login'           : 'login',
      'myaccount'       : 'myAccount',
      'addpost'         : 'addpost',
      'single/:postID'  : 'singlePost'
>>>>>>> 031dda210e57ba0b5fbfc0baaefea1d6deb26cff
    }, // end of routes

    home                : function () {
       // Renders Home View
<<<<<<< HEAD
       new App.Views.Home();
       new App.Views.Footer();
       new App.Views.AuthorPosts();
       new App.Views.SinglePost();
=======
       new App.Views.Home(App.posts);
>>>>>>> 031dda210e57ba0b5fbfc0baaefea1d6deb26cff
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

<<<<<<< HEAD
    authorposts        : function () {
      // Instantiates Create Author Post
      new App.Views.AuthorPosts();
    },

    tagspost        : function() {
      new App.Views.TagsPost();
=======
    singlePost          : function () {
      // Instantiate Single Post View

>>>>>>> 031dda210e57ba0b5fbfc0baaefea1d6deb26cff
    }



   }); // end of router
}()); // end of IIF
