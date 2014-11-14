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
      $('.authorPosts').html();
      this.postQuery();
    },

    render: function () {

    },

    postQuery: function () {
      var self = this;
      console.log(App.posts.models[0].attributes.user.id);
      // Query parse to find posts
      // for the passed user
      var userPosts = new Parse.Query(App.Models.Post);
      userPosts.equalTo('username', App.user)
      // Paul is working here

    }

  }); // end of view

}()); // end of IIF
