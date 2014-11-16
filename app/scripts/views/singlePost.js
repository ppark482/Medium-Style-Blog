(function () {

  App.Views.SinglePost=Parse.View.extend({

    el                : '#middleRegion',

    template          : _.template($('#singlePostTemp').html()),

    events: {

      'click .edit'   : 'edit',
      'click .delete' : 'delete'

    },

    initialize        : function (options) {
      this.options = options;
      this.render();
      var modelID = options.model.id;
    }, // end of initialize

    render            : function (options) {
      new App.Views.NavBar();
      new App.Views.Footer();
      new App.Views.FooterAuthors();
      console.log(this.model.attributes.user.id);
      this.$el.html(this.template(this.options.model.toJSON()));
    }, // end of render

    edit              : function() {
      // NEED TO PASS ID VALUE TO NEW EDIT VIEW
      // console.log(modelID);
      var editTitle = $('#titleForEdit').text();
      var editText = $('#contentForEdit').text();
      var editTag = $('#tagForEdit').text();
      new App.Views.EditPost({
        title: editTitle,
        content: editText,
        tag: editTag
      });
    }, //end of edit

    delete            : function () {

    },

    loop              : function() {


      }//end of loop

  }); //end of single post view



}());// end of IIF
