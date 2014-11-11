(function () {

  App.Views.Home = Parse.View.extend({

    events: {
      'click .signUp' : 'signupForm'
    },

    initialize: {

      this.render();
    },

    render: function () {
      // this.$el.html($('#acctTemp').html());


    },

    signupForm: function() {

    }


  });



}());
