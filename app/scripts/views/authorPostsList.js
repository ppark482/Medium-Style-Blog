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
      // Render query
      this.postQuery(options);
    },
    render: function () {
    },


    postQuery: function (options) {
      var self = this;
      // console.log(App.posts.models[0].attributes.user.id);
      // Query parse to find posts
      // for the passed user
      console.log(options.model);
      var query = new Parse.Query(App.Models.Post);
      query.equalTo('user', options.model);
      query.find({
        success: function(results) {
          _.each(results, function(x) {
            // console.log(x.toJSON());
            self.$el.append(self.template(x.toJSON()));
          });
        }
      }); // end of query find
    } // end of postQuery

  }); // end of view

}()); // end of IIF
