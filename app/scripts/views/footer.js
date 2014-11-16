(function () {

  App.Views.Footer = Parse.View.extend({

    el                : '#lowerRegion',

    events: {
      'click .author' : 'authorposts',
      'click .green'  : 'tagspostG',
      'click .yellow' : 'tagspostY',
      'click .orange' : 'tagspostO',
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

    tagspostG        : function () {
      // Instantiates Tags Posts
      App.router.navigate('green', { trigger:true });
    },

    tagspostY        : function () {
      // Instantiates Tags Posts
      App.router.navigate('green', { trigger:true });
    },

    tagspostO       : function () {
      // Instantiates Tags Posts
      App.router.navigate('green', { trigger:true });
    }


  });

}());
