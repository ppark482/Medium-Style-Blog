(function () {

  App.Views.Footer = Parse.View.extend({

    el                : '#lowerRegion',

    template          : _.template($('#footerTemp').html()),

      events: {
        'click .author' : 'authorposts',
        'click .tag'    : 'tagspost'
      },

      initialize        : function () {
        this.render();
        console.log("works");
      }, // end of initialize

      render            : function () {
        // Renders Foot Temp
        this.$el.html(this.template);
      }, // end of render


      authorposts        : function () {
        // Instantiates Create Acct Form
      App.router.navigate('authorposts', { trigger:true });
      },

      tagspost        : function () {
        // Instantiates Single Posts
      App.router.navigate('tagspost', { trigger: true });

      },

  });

}());
