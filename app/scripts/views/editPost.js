(function () {

  App.Views.EditPost = Parse.View.extend({

    el                  : '#middleRegion',

    template            : _.template($('#editTemp').html()),


    events: {
      'single/:postID'  : 'singlePost',
      'click #cancel'   : 'cancel',
      'click #update'   : 'update'
    },

    initialize          : function () {
      this.render();
    },

    render              : function () {
      // Renders Nav Bar
      new App.Views.NavBar();
      new App.Views.Footer();
      this.$el.html(this.template);
      // Render Add Post Page
    },

    update               : function () {

    },

    singlePost          : function(postId) {
      var x = App.posts.get({id: postId});
      new App.Views.SinglePost({model: x});
    },


    cancel               : function () {

      App.router.navigate('myaccount', { trigger:true });

    }



  }); // end of view


}());
