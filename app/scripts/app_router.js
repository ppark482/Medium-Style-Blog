(function() {

  App.Routers.AppRouter = Parse.Router.extend({

    initialize: function() {
      Parse.history.start();
    }, // end of initialize

    routes: {
      ''              : 'home',
      'create'        : 'createAccount',
      'login'         : 'login',
    }, // end of routes

    home              : function () {
       // Renders Home View
       new App.Views.Home();
    }, // end of home

    createAccount     : function () {
       // Instantiates Create Acct Form
       new App.Views.CreateAcct();
    }, // end of createAccount

    login             : function () {
       // Instantiates Login View
       new App.Views.Login();
    } // end of login

   }); // end of router
}()); // end of IIF
