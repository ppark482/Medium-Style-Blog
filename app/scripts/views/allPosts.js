(function() {

  App.Views.AllPosts = Parse.View.extend({

    el: '#middleRegion',

    template: _.template($('#allPostsTemp').html()),

    initialize: function (options) {
      this.render;
      console.log('all posts');
      App.posts.on('sync', this, this);
      $('#middleRegion').html(this.template);
    },

    render: function () {
      // Renders All Posts List
      console.log('i can haz render?'),
      this.$el.html(this.template(this.options.toJSON()));
    }

  }); // end of view

}()); // end of IIF
