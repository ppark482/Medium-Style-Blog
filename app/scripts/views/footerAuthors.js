(function(){

  App.Views.FooterAuthors = Parse.View.extend({

    tagName: 'ul',
    className: 'listOfAuthors',

    template: _.template($('#footerAuthorTemp').html()),

    events: {

    },

    initialize: function() {
      this.render();
      $('.authorsList').append(this.$el);
    },

    render: function() {
      var self = this;
      // console.log(options);
      var users = App.user_collection.models;
      console.log(users);
      _.each(users, function(x) {
        // Need to bring in all users that have posted
        // And inject into rendered template
        console.log(x);
        self.$el.append(self.template(x.toJSON()));
      });
      console.log(this.el);
    }


  }); // end of view

}()); // end of IIF