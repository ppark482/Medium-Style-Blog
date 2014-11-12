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
      var user = new Parse.User({
        username: $('#createUsername').val(),
        password: $('#createPassword').val()
      });
      user.signUp(null, {
        success: function(user) {
          console.log('Account created');
          $('#middleRegion').empty();
          App.router.navigate('', { trigger: true });
        },
        error: function(user, error) {
          alert('Error');
          App.router.navigate('', { trigger: true });
        }
      }); // end of user.signup
    } // end of accountCreation

  }); // end of view

}()); // end of IIF
