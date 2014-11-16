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
      // Get our element on the page
      this.postQuery(user);
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
      var self = this;
      self.$el.empty();
      var username = user.attributes.username;
      console.log(username);
      query = new Parse.Query(App.Models.Post);
      query.equalTo('author', username);
      query.find({
        success: function (results) {
          console.log(results);
          _.each(results, function (x) {
            self.$el.append(self.template(x.toJSON()));
          });
        }
      });
    } // end of query

  }); // end of view


}()); // end of IIF
