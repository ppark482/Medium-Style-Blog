(function () {

  App.Views.AddPost = Parse.View.extend({

    el: '#middleRegion',

    events: {
      'click #publish' : 'publish',
      'click #asDraft'   : 'draft'
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
        user: App.user,
        author: App.user.attributes.username,
        status: 'published'
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

    }, // end of publish

    draft            : function (e) {
      e.preventDefault();
      // Create new post for current user as draft
      var p = new App.Models.Post ({
        title: $('#addTitle').val(),
        content: $('#addContent').val(),
        tag: $('#addTag').val(),
        user: App.user,
        author: App.user.attributes.username,
        status: 'draft'
      });
      var access = new Parse.ACL(App.user);
      // Set read access to anyone
      access.setPublicReadAccess(true);
      // Set access privilege to current user
      p.setACL(access);
      // Save post to collection
      p.save(null, {
        success: function() {
          App.posts.add(p);
          App.router.navigate('myaccount', { trigger:true });
        }
      }); // end of save
    } // end of draft

  }); // end of view

}()); // end of IIF
