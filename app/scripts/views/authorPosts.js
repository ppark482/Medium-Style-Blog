(function () {

  App.Views.AuthorPosts = Parse.View.extend({

    el                : '#middleRegion',

    template          : _.template($('#authorPostTemp').html()),

    events: {

    },

    initialize        : function(options) {
      this.options=options;
      this.render();
    }, // end of initialize

    render            : function(options) {

      this.$el.html(this.template(this.options));
    } // end of render
  });

}());
