(function() {

  App.Views.CreateAcct = Parse.View.extend({

    el: '#middleRegion',

    event: {},


    initialize: function() {
      this.render();
    },

    render: function() {
      // Renders Create Acct Form
      var createAcct = $('#acctTemp').html();
      this.$el.html(createAcct);
    }


  });

}());
