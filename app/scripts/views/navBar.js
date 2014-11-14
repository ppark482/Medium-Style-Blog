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
      this.logstat();
      // $('.guest').append()
    }, // end of render

    home              : function() {

      new App.Views.Home({collection: App.posts, user: App.user});
    },

    logstat             : function() {

      var a = App.user.getUsername();
      $('.guest').append(" "+ a + " ");

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
      }

  }); // end of view

}()); // end of IIF
