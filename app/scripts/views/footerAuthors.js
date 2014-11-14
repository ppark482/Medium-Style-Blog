(function(){

  App.Views.FooterAuthors = Parse.View.extend({

    tagName: 'ul',
    className: 'listOfAuthors',

    template: _.template($('#footerAuthorTemp').html()),

    events: {

    },

    initialize: function() {
      this.render();
    },

    render: function() {
      var self = this;
      // console.log(options);
      var users = App.user_collection.models;
      console.log(users);
      // Need to get this element on the page
      $('.authorsList').html('hello');
      _.each(users, function(x) {
        // Need to bring in all users that have posted
        // And inject into rendered template
        console.log(x);
        this.$el.append(x.toJSON());
      });
    }


  }); // end of view

}()); // end of IIF
