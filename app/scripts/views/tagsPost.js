(function () {

  App.Views.TagsPost = Parse.View.extend({

    el: '#middleRegion',

    events: {

    },

    template: _.template($('#tagViewTemp').html()),

    initialize                : function(options) {
      this.options = options;
      this.render(options);
    }, // end of initialize

    render                    : function(options) {
      console.log(options);
      this.$el.html(this.template);
      new App.Views.NavBar(); 
      new App.Views.Footer();
      new App.Views.FooterAuthors();

    }, // end of render

    greenpost                 : function() {

    },

    yellowpost                 : function() {

    },

    orangepost                 : function() {

    },



  });



}());
