(function () {

  App.Views.AddPost = Parse.View.extend({

    el: '#middleRegion',

    initialize: function () {
      this.render();
    },

    render: function () {
      // Renders Nav Bar
      new App.Views.NavBar();
      // Render Add Post Page
      var add = $('#addPostTemp').html();
      this.$el.html(add);
    }

  }); // end of view

}()); // end of IIF
