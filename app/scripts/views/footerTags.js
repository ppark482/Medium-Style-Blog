(function (){

  App.Views.FooterTags = Parse.View.extend({

    tagName: 'ul',
    className: 'listOfTags',

    template: _.template($('#footerTagTemp').html()),

    events: {

    },

    initialize: function() {
      this.render();
      App.user_collection.on('sync', this, this);
      $('.tagsList').html(this.$el);

    },

    render: function() {
      var self = this;
      // console.log(options);
      // Need to open up models in collection
      var users = App.posts.models;
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
