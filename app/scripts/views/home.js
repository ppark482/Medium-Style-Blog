(function () {

  App.Views.Home = Parse.View.extend({

    events: {
      'click .signUp' : 'signupForm'
    },

    initialize: function() {

      this.render();
    },

    render: function () {
      this.$el.html($('#homeTemp').html());


    },

    signupForm: function() {

    }


  });



}());
