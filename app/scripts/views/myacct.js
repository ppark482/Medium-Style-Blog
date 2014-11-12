(function () {

  App.Views.MyAcct = Parse.View.extend({

    el: '#middleRegion',

    events: {
      'click #addPost'      : 'addPost'
    }, // end of events

    template                : _.template($('#myAccountTemp').html()),

    initialize              : function (options) {
      // Retrieves passed in parameter from router
      this.options = options;
      this.render();
    }, // end of initialize

    render                  : function () {
      // Renders Nav Bar
      new App.Views.NavBar();
      // Render author page onto page
      this.$el.html(this.template(this.options.toJSON()));
    },

    addPost                 : function () {
      // Navigate to Add Post
      App.router.navigate('addpost', { trigger: true});
    }


  }); // end of view


}()); // end of IIF
