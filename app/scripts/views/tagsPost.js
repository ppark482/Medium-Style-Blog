(function () {

  App.Views.TagsPost = Parse.View.extend({

    el: '#middleRegion',

    template: _.template($('#tagViewTemp').html()),

    initialize                : function() {
      this.render();
    }, // end of initialize

    render                    : function() {

      this.$el.html(this.template);
      new App.Views.NavBar();
      new App.Views.Footer();
      new App.Views.FooterAuthors();

    } // end of render



  });



}());
