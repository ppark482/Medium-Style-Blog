(function () {

  App.Views.EditPost = Parse.View.extend({

    el: '#middleRegion',
    template                : _.template($('#editTemp').html()),


    events: {
      'click #publish' : 'publish'
    },

    initialize      : function () {
      this.render();
    },

    render          : function () {
      // Renders Nav Bar
      new App.Views.NavBar();
      new App.Views.Footer();
      // Render Add Post Page
    },

    publish         : function (e) {
      e.preventDefault();
      // Creates a new post for the current user
      var p = new App.Models.Post ({
        title: $('#editTitle').val(),
        content: $('#editContent').val(),
        tag: $('#editTag').val(),
        user:App.user
        });

      var access = new Parse.ACL(App.user);
      // Set read access to anyone
      access.setPublicReadAccess(true);
      // Set access privilege to current user
      p.setACL(access);

      // Saves post to collection
      p.save(null, {
        success: function() {
          App.posts.add(p);
          App.router.navigate('myaccount', {trigger: true});
        }
      }); // end of save

    } // end of publish

  }); // end of view


}());
