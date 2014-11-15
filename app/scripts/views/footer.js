(function () {

  App.Views.Footer = Parse.View.extend({

    el                : '#lowerRegion',

    events: {
      'click .author' : 'authorposts',
      'click .green'  : 'tagspost',
      'click .yellow' : 'tagspost',
      'click .orange' : 'tagspost',
    },

    initialize        : function (options) {
      this.options = options;
    }, // end of initialize

    render            : function (options) {
      // Renders Foot Temp
      this.$el.append(this.template(this.options));
    }, // end of render


    authorposts        : function () {
      // Instantiates Create Acct Form
    App.router.navigate('authorposts', { trigger:true });
    },

    tagspost        : function () {
    new App.Views.TagsPost();
      // Instantiates Tags Posts
    App.router.navigate('tagspost', { trigger: true });

    }

  });

}());
