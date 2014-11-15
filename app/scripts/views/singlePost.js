(function () {

  App.Views.SinglePost=Parse.View.extend({

    el                : '#middleRegion',

    template          : _.template($('#singlePostTemp').html()),

    events: {

      'click .edit' : 'edit',

    },

    initialize        : function(options) {
      this.options=options;
      this.render();
      this.edit();
    }, // end of initialize

    render            : function(options) {
      new App.Views.NavBar();
      new App.Views.Footer();
      new App.Views.FooterAuthors();
      this.$el.html(this.template(this.options.model.toJSON()));
    }, // end of render

    edit              : function() {

      // new App.Views.EditPost();



    }, //end of edit

    loop              : function() {


      }//end of loop

  }); //end of single post view



}());// end of IIF
