(function() {

  App.Views.CreateAcct = Parse.View.extend({

    el: '#middleRegion',

    event: {},


    initialize: function() {
      this.render;


    },

    render: function(){






      var acct = $('#acctTemp').html();
      var renderAcct = _.template(acct);
      $('#middleRegion').html(this.el);

    }


  });

}());
