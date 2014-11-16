(function () {

  /* Renders Home View */
  App.Views.NavBar = Parse.View.extend({

    el                      : '#upperRegion',

    template                : _.template($('#navTemp').html()),

    events: {
      'click .home'         : 'home',
      'click .signUp'       : 'signupForm',
      'click .acctLink'     : 'toMyAcct',
      'click .login'        : 'loginForm',
      'click .logout'       : 'logout'
    }, // end of events

    initialize              : function () {
      this.render();
    }, // end of initialize

    render                  : function () {
      // Renders Nav Bar
      this.$el.html(this.template);
      this.logName();
      this.logstat();
    }, // end of render

    home                    : function() {
      new App.Views.Home({collection: App.posts, user: App.user});
      App.router.navigate('', { trigger:true });
    },

    logName                 : function() {
      if (App.user === null) {
        $('.guest').html('Guest');
      } else {
      var a = App.user.getUsername();
      $('.guest').append(" "+ a + " ");
      }//end if/else statment
    },

    signupForm              : function() {
      // On click to signup
      // Routes to 'create' page
      App.router.navigate('create', { trigger: true });
    }, // end of signupForm

    toMyAcct                : function () {
      // Navigate to my account
      App.router.navigate('myaccount', { trigger: true });
    },

    loginForm               : function() {
      // On click to login
      // Routes to 'login' page
      App.router.navigate('login', { trigger: true });
    }, // end of loginForm

    logout                  : function() {
        Parse.User.logOut();
        App.user = null;
        new App.Views.NavBar();
        App.router.navigate('', {trigger : true} );
        console.log('logged out');
    },

    logstat                 : function() {
      if (App.user===null) {
        $('button').remove('.logout');
        $('span').remove('.guest');
        $('span').remove('.welcome');
        $('a').remove('.acctLink');
      } else {
        $('button').remove('.signUp');
        $('button').remove('.login');
      }
      // end of if statement
    }// end of logstat

  }); // end of view

}()); // end of IIF
