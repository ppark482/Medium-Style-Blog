(function() {

  App.Views.CreateAcct = Parse.View.extend({

    el: '#middleRegion',

    events: {
      'click button#makeAcct' : 'accountCreation'
    },

    initialize: function() {
      this.render();
    },

    render: function() {
      // Renders Create Acct Form
      var createAcct = $('#acctTemp').html();
      this.$el.html(createAcct);
    },

    accountCreation: function(e) {
      e.preventDefault();
      var username = $('#createUsername').val();
      var password = $('#createPassword').val();

      var user = new Parse.User();
      user.set('username', username);
      user.set('password', password);
      user.signUp(null, {
        success: function(user) {
          console.log('Account created');
          App.router.navigate('', { trigger: true });
        },
        error: function(user, error) {
          alert('error');
        }
      }) // end of user.signup

    } // end of accountCreation


  });

}()); // end of IIF
