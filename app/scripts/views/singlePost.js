(function () {

  App.Views.SinglePost=Parse.View.extend({

    el                : '#middleRegion',

    template          : _.template($('#singlePostTemp').html()),

    events: {
      //no events yet

    },

    initialize        : function(options) {
      this.options=options;
      this.render();
      this.edit();
    }, // end of initialize

    render            : function(options) {
      new App.Views.NavBar();
      new App.Views.FooterAuthors();
      this.$el.html(this.template(this.options.model.toJSON()));
    }, // end of render

    edit              : function() {

      // if(App.user.getUsername) {
      //   console.log(user);
      //   console.log("yes");
      //   $('.ifAuthor').append('<button class="editBtn">Edit</button>');



    }, //end of edit

    loop              : function() {

        // _.each(allP, function(){
        //
        // });
      }//end of loop

  }); //end of single post view



}());// end of IIF
