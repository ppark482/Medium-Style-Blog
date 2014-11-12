(function() {


  App.Routers.AppRouter = Parse.Router.extend({

    initialize: function() {
    Parse.history.start();

  },

    routes: {
      '' : 'home',
      'create' : 'createAccount'
    }, // end of routes

     home: function() {
       // Renders Home View
       new App.Views.Home();
     }

     createAccount: function() {
       
     }
});






}()); // end of IIF
