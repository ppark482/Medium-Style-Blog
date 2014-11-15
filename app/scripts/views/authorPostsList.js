(function(){

  App.Views.AuthorPostsList = Parse.View.extend({

    tagName: 'ul',
    className: 'aPostsList',

    template: _.template($('#authorPostsListsTemp').html()),

    events: {

    },

    initialize: function (options) {
      this.options = options;
      // Get our element on the page
      $('.authorPosts').html(this.$el);
      this.postQuery();
    },

    render: function () {

    },

    postQuery: function () {
      var self = this;
      // console.log(App.posts.models[0].attributes.user.id);
      // Query parse to find posts
      // for the passed user
      var query = new Parse.Query(App.Models.Post);
      // not working ++++++++++++++++++++++++++++++++++++++++++++++++++++
      query.equalTo('user', App.user.id);
      console.log(App.user.id);
      query.find({
        success: function(results) {
          self.collection = results;
          _.each(results, function(x) {
            // console.log(x.toJSON());
            self.$el.append(self.template(x.toJSON()));
          });
        }
      });
    } // end of postQuery

  }); // end of view

}()); // end of IIF
