(function() {

  App.Views.AllPosts = Parse.View.extend({

    el: '#middleRegion',

    template: _.template($('#allPostsTemp').html()),

    events: {
          'click li' : 'singlepost'
    },

    initialize: function (options) {
      this.options.collection = options;
      App.posts.on('sync', this, this);
      // this.authorQuery();
      this.render(options);
    }, // end of initialize

    render: function (options) {
      var self = this;
      var posts = App.posts.models;
      _.each(posts, function(x) {
        self.$el.prepend(self.template(x.toJSON()));
      });

    }, /*end of render*/

    singlepost     : function () {
      // console.log(this);
    }

  }); // end of view

}()); // end of IIF
