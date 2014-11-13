(function() {

  App.Views.AllPosts = Parse.View.extend({

    el: '#middleRegion',

    template: _.template($('#allPostsTemp').html()),

    initialize: function (options) {
      this.render(options);
      App.posts.on('sync', this, this);
    },

    render: function (options) {
      // Renders All Posts List
      console.log(options);
      console.log(options.toJSON());
      this.$el.html(this.template(this.options.toJSON()));
    }

  }); // end of view

}()); // end of IIF
