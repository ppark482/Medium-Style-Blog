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
      var navbar = $('#homeTemp').html();
      this.$el.html(navbar);
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
