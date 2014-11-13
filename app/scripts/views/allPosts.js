(function() {

  App.Views.AllPosts = Parse.View.extend({

    el: '#middleRegion',

    template: _.template($('#allPostsTemp').html()),

    initialize: function (options) {
      this.options.collection = options;
      App.posts.on('sync', this, this);
      this.render(options);
    }, // end of initialize

    render: function (options) {
      var self = this;
      var posts = this.options.models;
      console.log(App.user_collection);
      _.each(posts, function(x) {
        // Renders All Posts List
        self.$el.append(self.template(x.toJSON()));
      });
    }

  }); // end of view

}()); // end of IIF
