(function() {

  App.Views.AllPosts = Parse.View.extend({

    el: '#middleRegion',

    tagName: 'ul',

    className: 'allPosts',

    template: _.template($('#allPostsTemp').html()),

    initialize: function () {
      this.render;
    },

    render: function () {
      // Renders All Posts List
      this.$el.html(this.template);
    }

  }); // end of view

}()); // end of IIF
