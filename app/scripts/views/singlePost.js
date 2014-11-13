(function () {

  App.Views.SinglePost=Parse.View.extend({

    el                : '#middleRegion',

    template          : _.template($('#singlePostTemp').html()),

    events: {

    },

    initialize        : function(options) {
      this.options=options
      this.render();
    }, // end of initialize

    render            : function(options) {

      this.$el.html(this.template(this.options));
    } // end of render



  });



}());
