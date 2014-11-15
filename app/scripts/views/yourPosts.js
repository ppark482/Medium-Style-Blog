(function() {

  App.Views.YourPosts = Parse.View.extend({

    el                    : '#middleRegion',
    template              :  _.template($('#yourTemp').html()),

    events: {
      //click on a post, it will take you to the singlepost view for that post
    },

    initialize            : function() {

      this.render();

    },//end of initialize

    render                : function() {

    }//end of render

  });

}())//End of IIF
