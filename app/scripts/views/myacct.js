(function () {

  App.Views.MyAcct = Parse.View.extend({

    el: '#middleRegion',

    events: {

    }, // end of events

    initialize: function () {
      this.render();
    }, // end of initialize

    render: function () {
      // Render author page onto page
      var author = $('#myAccountTemp').html();
      this.$el.html(author);
    }


  }); // end of view


}()); // end of IIF
