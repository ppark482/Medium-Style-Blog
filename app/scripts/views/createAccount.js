(function() {

  App.Views.CreateAcct = Parse.View.extend({

    el: '#middleRegion',

    events: {
      'click button#makeAcct' : 'accountCreation'
    }, // end of events

    initialize                : function() {
      this.render();
    }, // end of initialize

    render                    : function() {
      new App.Views.NavBar();
      // Renders Create Acct Form
      var createAcct = $('#acctTemp').html();
      this.$el.html(createAcct);
    }, // end of render

    accountCreation           : function(e) {
      e.preventDefault();
      // New User Creation
      // Send New User to Server
      var username = $('#createUsername').val();
      var password = $('#createPassword').val();
      var user = new Parse.User();
      user.set('username', username);
      user.set('password', password);
      user.signUp(null, {
        success: function (user) {
          // console.log('Account created');
          // App.router.navigate('', { trigger: true });
        },
        error: function (user, error) {
          alert('Error');
          // App.router.navigate('', { trigger: true });
        }
      }); // end of user.signup
      App.router.navigate('', { trigger: true });
    } // end of accountCreation

  }); // end of view

}()); // end of IIF
