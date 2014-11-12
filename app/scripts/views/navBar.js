(function () {

  /* Renders Home View */
  App.Views.NavBar = Parse.View.extend({

    el: "#upperRegion",

    events: {
      'click .signUp' : 'signupForm',
      'click .login'  : 'loginForm'
    }, // end of events

    initialize        : function () {
      this.render();
    }, // end of initialize

    render            : function () {
      // Renders Nav Bar
      var navbar = $('#homeTemp').html();
      this.$el.html(navbar);
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
    } // end of loginForm

  }); // end of view

}()); // end of IIF
