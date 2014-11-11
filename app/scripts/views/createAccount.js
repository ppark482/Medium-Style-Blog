(function() {

  App.Views.CreateAcct = Parse.View.extend({
    el: '.middleRegion',

    event: {},

    // template: _.template($('#acctTemp').html()),

    initialize: function() {
      this.render;
    },

    render: function(){
      //  this.$el.empty();
      //  this.$el.html(

      var acct = $('#acctTemp').html();
      var renderAcct = _.template(acct);
      this.$el.html(acct);
    }


  });

}());
