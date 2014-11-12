(function(){

  App.Views.Home = Parse.View.extend({


    el: "#upperRegion",

    events: {
      'click .signUp' : 'signupForm'
    },


    initialize        : function () {

      this.render();
    },

    render            : function () {

      // Renders Nav Bar
      var navbar = $('#homeTemp').html();
      this.$el.html(navbar);

    },

    signupForm        : function() {
      // Instantiates Create Acct Form
      new App.Views.CreateAcct();


    }

  }); // end of view

}()); // end of IIF
