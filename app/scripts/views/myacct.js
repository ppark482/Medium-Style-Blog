(function () {

  App.Views.MyAcct = Parse.View.extend({

    el                      : '#middleRegion',

    events: {
      'click #addPost'      : 'addPost'
    }, // end of events

    template                : _.template($('#myAccountTemp').html()),

    initialize              : function (options) {
      // Retrieves passed in parameter from router
      this.options = options;
      App.posts.on('sync', this, this);
      this.render(options);
    }, // end of initialize

    render                  : function (options) {
      // Renders Nav Bar
      new App.Views.NavBar();
      // Renders Footer
      new App.Views.Footer();
      new App.Views.FooterAuthors();
      // Render author page onto page
      this.$el.html(this.template(this.options.toJSON()));
      // Render this Author's Post view
      new App.Views.MyAcctPosts(options);
    },

    addPost                 : function () {
      // Navigate to Add Post
      App.router.navigate('addpost', { trigger: true});
    } // end of addPost


  }); // end of view


}()); // end of IIF
