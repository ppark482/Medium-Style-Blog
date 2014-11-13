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
      // Render Author Posts in Footer
      new App.Views.AuthorPosts();
      // Render Footer
      new App.Views.Footer(this.options.user);
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
