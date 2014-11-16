(function () {

  App.Views.SinglePost=Parse.View.extend({

    el                : '#middleRegion',

    template          : _.template($('#singlePostTemp').html()),

    events: {

      'click .edit'   : 'edit',
      'click .delete' : 'delete',
      'submit #addComment' : 'addComment'

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




      this.$el.html(this.template(this.options.model.toJSON()));



      var commentTemplate = _.template($('#commentTemp').html());
      var comments_query = new Parse.Query(App.Models.Comment);
      comments_query.equalTo('parent', App.posts.model.attributes);
      console.log(App.posts.model.attributes);
      // console.log(this.options.model.attributtes);
      comments_query.descending("createdAt");

      this.$el.append('<h3>Comments</h3><ul class="comments"></ul>');

      comments_query.find({
        success: function (results) {

          _.each(results, function(comment) {
            $('ul.comments').append(commentTemplate(comment.toJSON()));
          });//end of each loop

        }//end of each  success function

      });//end of comments query

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


    },//end of loop


    addComment: function (e) {
      e.preventDefault();

      var self = this;
      var current = this.options;

      var comment = new App.Models.Comment({

        commentText: $('#commentText').val(),
        parent: this.options.post,
        user: App.user,
        author: App.user.attributes.name

      });

      comment.save(null, {
        success: function(){
          App.posts.add(comment);
          App.comments.fetch().done(function(){
            new App.Views.SinglePost(current);
          });
        }
      });

    }

  }); //end of single post view



}());// end of IIF
