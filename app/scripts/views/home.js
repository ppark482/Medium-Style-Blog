(function(){

  App.Views.Home = Parse.View.extend({

    initialize: function () {
      this.render
    },

    render: function () {
      new App.Views.NavBar();
    }

  }); // end of view

}()); // end of IIF
