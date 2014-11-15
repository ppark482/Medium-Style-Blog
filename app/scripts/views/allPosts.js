(function() {

  App.Views.AllPosts = Parse.View.extend({

    el: '#middleRegion',

    template: _.template($('#allPostsTemp').html()),

    events: {
          'click li' : 'singlepost'
    },

    initialize: function (options) {
      this.options.collection = options;
      App.posts.on('sync', this, this);
      // this.authorQuery();
      this.render(options);
    }, // end of initialize

    render: function (options) {
      var self = this;
      var posts = this.options.models;
      console.log(posts);
      // console.log(App.user_collection.models);
      _.each(posts, function(x) {
        self.$el.append(self.template(x.toJSON()));
      });
    }, /*end of render*/

    // authorQuery: function () {
    //   // Look for author names
    //   var self = this;
    //   // Query parse to find authors
    //   // for each post on this list
    //   var query = new Parse.Query(App.Models.Post);
    //   var postUsers = App.posts.models;
    //   _.each(postUsers, function(x) {
    //     console.log(x.attributes.user.id);
    //     query.equalTo('user', x.attributes.user.id);
    //     query.find({
    //       success: function(results) {
    //         console.log(results);
    //       }
    //     }); // end query find
    //   }); // end of each function
    //   query.equalTo('user', App.user);
    //   console.log(App.user)
    // },

    singlepost     : function () {
      // console.log(this);
    }

  }); // end of view

}()); // end of IIF
