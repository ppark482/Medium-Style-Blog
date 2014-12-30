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
      event.preventDefault();
      // Log User into account
      var username = $('#loginUsername').val();
      var password = $('#loginPassword').val();
      Parse.User.logIn(username, password, {
        success: function (user) {
          console.log('Login successful');
          // Route back to home page
          $('#upperRegion').empty();
          $('#middleRegion').empty();
          new App.Views.Home();
          App.router.navigate('', {trigger: true});
        },
        error: function (user, error) {
          console.log('wrong');
        }
      }); // end of logIn
    } // end of login

  }); // end of view

}()); // end of IIF
