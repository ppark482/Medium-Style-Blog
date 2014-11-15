(function () {

  App.Views.EditPost = Parse.View.extend({

    el                  : '#middleRegion',

    template            : _.template($('#editTemp').html()),


    events: {
      'click #cancel'   : 'cancel',
      'click #update'   : 'update'
    },

    initialize          : function (options) {
      this.options = options;
      this.render(options);
    },

    render              : function (options) {
      // Renders Nav Bar
      console.log(options);
      console.log(options);
      new App.Views.NavBar();
      new App.Views.Footer();
      this.$el.html(this.template);
      // console.log(editText);
      // Render Add Post Page
    },

    update               : function () {

    },


    cancel               : function () {

      App.router.navigate('myaccount', { trigger:true });

    }



  }); // end of view


}());
