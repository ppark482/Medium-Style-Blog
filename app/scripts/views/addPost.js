(function () {

  App.Views.AddPost = Parse.View.extend({

    el: '#middleRegion',

    events: {
      'click #publish' : 'publish'
    },

    initialize      : function () {
      this.render();
    },

    render          : function () {
      // Renders Nav Bar
      new App.Views.NavBar();
      // Render Add Post Page
      var add = $('#addPostTemp').html();
      this.$el.html(add);
    },

    publish         : function (e) {
      e.preventDefault();
      // Creates a new post for the current user
      var p = new App.Models.Post ({
        title: $('#addTitle').val(),
        content: $('#addContent').val(),
        tag: $('#addTag').val(),
        user: App.user
      });
      // Sets access privilege to current user
      p.setACL(new Parse.ACL(App.user));
      // Saves post to collection
      p.save(null, {
        success: function() {
          App.posts.add(p);
          App.router.navigate('myaccount', {trigger: true});
        }
      }); // end of save

    } // end of publish

  }); // end of view

}()); // end of IIF
