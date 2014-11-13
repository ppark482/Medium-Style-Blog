(function(){

  App.Views.Home = Parse.View.extend({

    el: "#upperRegion",

    events: {
      'click .signUp' : 'signupForm',
      'click .login'  : 'login'
    },

    initialize        : function () {
      this.render();
    },

    render            : function () {
      // Renders Nav Bar
      new App.Views.NavBar();
      // Render All Posts View
      new App.Views.AllPosts();
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
