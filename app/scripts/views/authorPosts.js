(function () {

  App.Views.AuthorPosts = Parse.View.extend({

    el                : '#middleRegion',

    template          : _.template($('#authorPostTemp').html()),

    events: {

    },

    initialize        : function(options) {
      console.log(options);
      this.options.collection = options;
      App.posts.on('sync', this, this);
      this.render();
    }, // end of initialize

    render            : function(options) {

      var self = this;
      var posts = this.options.models;
      _.each(posts, function(x) {

        // Renders All Posts List
        self.$el.append(self.template(x.toJSON()));

    });
  } // end of render
  });

}());
