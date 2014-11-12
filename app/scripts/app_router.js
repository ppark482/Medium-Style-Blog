(function() {

  App.Routers.AppRouter = Parse.Router.extend({

    initialize: function() {
    }, // end of initialize

    routes: {
      ''              : 'home',
      'create'        : 'createAccount',
      'login'         : 'login',
      'myaccount'     : 'myAccount'
    }, // end of routes

    home              : function () {
       // Renders Home View
       new App.Views.Home();
    }, // end of home

    createAccount     : function () {
       // Instantiate Create Acct Form
       new App.Views.CreateAcct();
    }, // end of createAccount

    login             : function () {
       // Instantiate Login View
       new App.Views.Login();
    }, // end of login

    myAccount         : function () {
      // Instantiate My Account View
      new App.Views.MyAcct();
    }

   }); // end of router
}()); // end of IIF
