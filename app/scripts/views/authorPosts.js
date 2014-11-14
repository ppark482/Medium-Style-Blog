(function () {

  App.Views.AuthorPosts = Parse.View.extend({

    el                : '#middleRegion',

    template          : _.template($('#authorPostTemp').html()),

    events: {

    },

    initialize        : function(options) {
      this.options.collection = options;
      App.posts.on('sync', this, this);
      // Need to render Navbar and footer for this view
      new App.Views.NavBar();
      new App.Views.Footer();
      this.render();
    }, // end of initialize

    render            : function(options) {
      var self = this;
      var posts = this.options.models;
      // Need to render selected author's name
      // Pull id from clicked name from footer bar
      self.$el.html(this.template);
  } // end of render
  });

}());
