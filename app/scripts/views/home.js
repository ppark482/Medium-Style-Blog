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
      new App.Views.AllPosts({collection: App.posts, user: App.user});
      // Render Footer
      new App.Views.Footer({ user : App.user });
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
