(function () {

  App.Views.MyAcctPosts = Parse.View.extend({

    tagName                 : 'ul',
    className               : 'yourPosts',

    events: {
    }, // end of events

    template                : _.template($('#myAcctPostsTemp').html()),

    initialize              : function (user) {
      // Retrieves passed in parameter from router
      App.posts.on('sync', this, this);
      this.render();
      this.postQuery(user);
      // Get our element on the page
      $('#yourPosts').html(this.$el);
    }, // end of initialize

    render                  : function () {
      var self = this;
      var posts = App.posts.models;
      _.each(App.posts.models, function (x) {
        self.$el.prepend(self.template(x.toJSON()));
      });
      // Render author page onto page
      // this.$el.html(this.template(.toJSON()));
    },

    postQuery               : function (user) {
      var username = user.attributes.username;
      query = new Parse.Query(App.Models.Post);
      query.equalTo('author', user);
      query.find({
        success: function (results) {
          _.each(results, function (x) {
            console.log(x);
          });
        }
      });

      // query.equalTo()
    }

  }); // end of view


}()); // end of IIF
