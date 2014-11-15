(function () {

  App.Views.EditPost = Parse.View.extend({

    el: '#middleRegion',

    template                : _.template($('#editTemp').html()),


    events: {
          //
    },

    initialize      : function () {
      this.render();
    },

    render          : function () {
      // Renders Nav Bar
      new App.Views.NavBar();
      new App.Views.Footer();
      this.$el.html(this.template);
      // Render Add Post Page
    }

  }); // end of view


}());
