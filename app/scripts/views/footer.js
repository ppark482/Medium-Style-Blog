(function () {

  App.Views.Footer = Parse.View.extend({

    el                : '#lowerRegion',

    template          : _.template($('#footerTemp').html()),

    events: {
      'click .author' : 'authorposts',
      'click .tag'    : 'tagspost'
    },

    initialize        : function (options) {
      this.options = options;
      this.render(options);
    }, // end of initialize

    render            : function (options) {
      console.log(options);
      // Renders Foot Temp
      this.$el.html(this.template(this.options));
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
