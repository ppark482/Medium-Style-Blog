(function() {

  App.Views.AllPosts = Parse.View.extend({

    el: '#middleRegion',

    template: _.template($('#allPostsTemp').html()),

    events: {
          'click .post' : 'singlepost'

    },

    initialize: function (options) {
      this.options.collection = options;
      App.posts.on('sync', this, this);
      this.render(options);
    }, // end of initialize

    render: function (options) {
      var self = this;
      var posts = this.options.models;
      console.log(posts);
      // console.log(App.user_collection.models);
      _.each(posts, function(x) {
        // Looking for author
        var id = x.id;
        // var user = App.user_collection.findWhere({ id : id });
        // console.log(user);
        // Renders All Posts List
        console.log(x);
        self.$el.append(self.template(x.toJSON()));
      });
    }

  }); // end of view

}()); // end of IIF
