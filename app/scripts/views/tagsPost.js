(function () {

  App.Views.TagsPost = Parse.View.extend({

    el: '#middleRegion',

    template: _.template($('#tagViewTemp').html()),

    initialize                : function(options) {
      this.render();
    }, // end of initialize

    render                    : function() {
      this.$el.empty();
      new App.Views.NavBar();
      new App.Views.Footer();
      new App.Views.FooterAuthors();

    } // end of render



  });



}());
