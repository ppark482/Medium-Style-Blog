(function () {

  App.Views.TagsPost = Parse.View.extend({

    el: '#middleRegion',

    events: {

    },

    template: _.template($('#tagViewTemp').html()),

    initialize                : function(options) {
      this.options = options;
      new App.Views.NavBar();
      new App.Views.Footer();
      new App.Views.FooterAuthors();
      $('#middleRegion').empty();
      this.render(options);
      this.postQuery(options);
    }, // end of initialize

    render                    : function(options) {
      this.$el.html(this.template);
    }, // end of render

    postQuery                 : function(options) {
      var self = this;
      var query = new Parse.Query(App.Models.Post);
      console.log(options);
      query.equalTo('tag', options);
      query.find({
        success: function(results) {
          _.each(results, function(x) {
            self.$el.html(self.template(x.toJSON()));
          });
        }
      }); // end of find
    } // end of query

  }); // end of view

}()); // end of IIF
